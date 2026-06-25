import Header from "../components/Header";
import RewardCard from "../components/RewardCard";
import StatBar from "../components/StatBar";

const Rewards = ({ gameState, handleRewardClaim }) => {
  return (
    <div>
      <Header title="Daily Rewards" subtitle="Claim your login rewards" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="grid grid-cols-2 gap-4">
        {gameState.rewards.map((reward, index) => (
            <RewardCard
                key={reward.day}
                reward={reward}
                index={index}
                rewards={gameState.rewards}
                onClaim={handleRewardClaim}
            />
        ))}
      </div>
    </div>
  );
};

export default Rewards;