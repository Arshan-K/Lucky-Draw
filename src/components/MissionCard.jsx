import { Coins } from "lucide-react";

const MissionCard = ({ mission, onClaim }) => {
  const completed = mission.progress >= mission.target;

  return (
    <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">{mission.title}</h3>
        <div className="flex items-center gap-1 text-sm text-yellow-300">
          <Coins className="h-4 w-4" />
          <span>{mission.reward}</span>
        </div>
      </div>

      <div className="mb-2 h-3 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-yellow-400"
          style={{ width: `${Math.min((mission.progress / mission.target) * 100, 100)}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span>
          {mission.progress}/{mission.target}
        </span>

        {completed && !mission.claimed ? (
          <button
            onClick={() => onClaim(mission.id)}
            className="rounded-lg bg-green-500 px-3 py-1 font-semibold text-white"
          >
            Claim
          </button>
        ) : mission.claimed ? (
          <span className="text-green-300">Claimed</span>
        ) : (
          <span className="text-white/60">In Progress</span>
        )}
      </div>
    </div>
  );
};

export default MissionCard;