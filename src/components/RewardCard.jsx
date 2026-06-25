import { Coins, Gem } from "lucide-react";

const RewardCard = ({ reward, index, rewards, onClaim }) => {
  const previousReward = index === 0 ? null : rewards[index - 1];
  const isUnlocked = index === 0 ? true : previousReward?.claimed;

  return (
    <div className="rounded-2xl bg-white/10 p-4 text-center text-white shadow">
      <p className="mb-2 text-sm opacity-70">Day {reward.day}</p>

      <div className="mb-3 flex items-center justify-center gap-2 text-lg font-bold">
        {reward.type === "gems" ? (
          <>
            <Gem className="h-5 w-5 text-cyan-300" />
            <span>{reward.reward}</span>
          </>
        ) : (
          <>
            <Coins className="h-5 w-5 text-yellow-300" />
            <span>{reward.reward}</span>
          </>
        )}
      </div>

      {reward.claimed ? (
        <p className="font-semibold text-green-300">Claimed</p>
      ) : isUnlocked ? (
        <button
          onClick={() => onClaim(reward.day)}
          className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-slate-900"
        >
          Claim
        </button>
      ) : (
        <button
          disabled
          className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white/50"
        >
          Locked
        </button>
      )}
    </div>
  );
};

export default RewardCard;