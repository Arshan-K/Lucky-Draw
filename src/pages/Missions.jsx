import Header from "../components/Header";
import MissionCard from "../components/MissionCard";
import StatBar from "../components/StatBar";

const Missions = ({ gameState, handleMissionClaim }) => {
  return (
    <div>
      <Header title="Missions" subtitle="Complete tasks and claim rewards" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="space-y-4">
        {gameState.missions.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            onClaim={handleMissionClaim}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;