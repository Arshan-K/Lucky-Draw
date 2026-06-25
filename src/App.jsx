import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";
import { initialGameState } from "./data/initialGameState";
import { loadGameState, resetGameState, saveGameState } from "./utils/gameStorage";
import { calculateWin, generateSpinGrid } from "./utils/slotLogic";

import Home from "./pages/Home";
import Gameplay from "./pages/Gameplay";
import Missions from "./pages/Missions";
import Rewards from "./pages/Rewards";
import Store from "./pages/Store";
import Profile from "./pages/Profile";

function App() {
  const [gameState, setGameState] = useState(() => loadGameState(initialGameState));
  const [slotGrid, setSlotGrid] = useState(generateSpinGrid());
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);

  const setCurrentScreen = (screen) => {
    setGameState((prev) => ({ ...prev, currentScreen: screen }));
  };

  const updateMissionProgress = (updatedState, winAmount = 0) => {
    const updatedMissions = updatedState.missions.map((mission) => {
      if (mission.claimed) return mission;

      if (mission.id === 1) {
        return {
          ...mission,
          progress: Math.min(updatedState.totalSpins, mission.target),
        };
      }

      if (mission.id === 2) {
        return {
          ...mission,
          progress: Math.min(mission.progress + winAmount, mission.target),
        };
      }

      if (mission.id === 3) {
        return {
          ...mission,
          progress: Math.min(updatedState.gems, mission.target),
        };
      }

      return mission;
    });

    return { ...updatedState, missions: updatedMissions };
  };

  const handleSpin = () => {
    if (gameState.coins < gameState.currentBet || isSpinning) return;

    setIsSpinning(true);

    const spinInterval = setInterval(() => {
      setSlotGrid(generateSpinGrid());
    }, 120);

    setTimeout(() => {
      clearInterval(spinInterval);

      const finalGrid = generateSpinGrid();
      setSlotGrid(finalGrid);

      const win = calculateWin(finalGrid, gameState.currentBet);

      let updatedState = {
        ...gameState,
        coins: gameState.coins - gameState.currentBet + win,
        totalSpins: gameState.totalSpins + 1,
        lastWin: win,
        biggestWin: Math.max(gameState.biggestWin, win),
      };

      updatedState = updateMissionProgress(updatedState, win);

      if (updatedState.totalSpins % 5 === 0) {
        updatedState.gems += 1;
        updatedState = updateMissionProgress(updatedState, 0);
      }

      if (updatedState.totalSpins % 10 === 0) {
        updatedState.level += 1;
      }

      setGameState(updatedState);
      setIsSpinning(false);
    }, 1200);
  };

  const changeBet = (amount) => {
    setGameState((prev) => ({
      ...prev,
      currentBet: Math.max(50, prev.currentBet + amount),
    }));
  };

  const handleMissionClaim = (missionId) => {
    setGameState((prev) => {
      const mission = prev.missions.find((m) => m.id === missionId);
      if (!mission || mission.claimed || mission.progress < mission.target) return prev;

      return {
        ...prev,
        coins: prev.coins + mission.reward,
        missions: prev.missions.map((m) =>
          m.id === missionId ? { ...m, claimed: true } : m
        ),
      };
    });
  };

  const handleRewardClaim = (day) => {
    setGameState((prev) => {
      const reward = prev.rewards.find((r) => r.day === day);
      if (!reward || reward.claimed) return prev;

      let updatedState = {
        ...prev,
        rewards: prev.rewards.map((r) =>
          r.day === day ? { ...r, claimed: true } : r
        ),
      };

      if (reward.type === "gems") {
        updatedState.gems += reward.reward;
      } else {
        updatedState.coins += reward.reward;
      }

      updatedState = updateMissionProgress(updatedState, 0);
      return updatedState;
    });
  };

  const handleBuyPack = (pack) => {
    setGameState((prev) => {
      let updatedState = { ...prev };

      if (pack.type === "gems") {
        updatedState.gems += pack.amount;
      } else {
        updatedState.coins += pack.amount;
      }

      updatedState = updateMissionProgress(updatedState, 0);
      return updatedState;
    });
  };

  const handleResetProgress = () => {
    resetGameState();
    setGameState(initialGameState);
    setSlotGrid(generateSpinGrid());
  };

  const renderScreen = () => {
    switch (gameState.currentScreen) {
      case "home":
        return <Home gameState={gameState} setCurrentScreen={setCurrentScreen} />;
      case "game":
        return (
          <Gameplay
            gameState={gameState}
            slotGrid={slotGrid}
            handleSpin={handleSpin}
            changeBet={changeBet}
            setCurrentScreen={setCurrentScreen}
            isSpinning={isSpinning}
          />
        );
      case "missions":
        return (
          <Missions
            gameState={gameState}
            handleMissionClaim={handleMissionClaim}
          />
        );
      case "rewards":
        return (
          <Rewards
            gameState={gameState}
            handleRewardClaim={handleRewardClaim}
          />
        );
      case "store":
        return <Store gameState={gameState} handleBuyPack={handleBuyPack} />;
      case "profile":
        return (
          <Profile
            gameState={gameState}
            handleResetProgress={handleResetProgress}
          />
        );
      default:
        return <Home gameState={gameState} setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 p-4">
      <div className="mx-auto min-h-[100vh] w-full max-w-[390px] rounded-[28px] border border-white/10 bg-white/5 p-4 pb-24 shadow-2xl backdrop-blur-md">
        {renderScreen()}
      </div>

      {gameState.currentScreen !== "game" && (
        <BottomNav
          currentScreen={gameState.currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
}

export default App;