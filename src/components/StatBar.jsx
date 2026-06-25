import { Coins, Gem, Trophy } from "lucide-react";

const StatCard = ({ label, value, icon: Icon, iconClass }) => {
  return (
    <div className="rounded-xl bg-white/10 p-3 text-white shadow">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-white/10 p-2">
          <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={2.4} />
        </div>
        <div>
          <p className="text-[11px] opacity-70">{label}</p>
          <p className="font-bold leading-tight">{value}</p>
        </div>
      </div>
    </div>
  );
};

const StatBar = ({ coins, gems, level }) => {
  return (
    <div className="mb-4 grid grid-cols-3 gap-2">
      <StatCard label="Coins" value={coins} icon={Coins} iconClass="text-yellow-300" />
      <StatCard label="Gems" value={gems} icon={Gem} iconClass="text-cyan-300" />
      <StatCard label="Level" value={level} icon={Trophy} iconClass="text-orange-300" />
    </div>
  );
};

export default StatBar;