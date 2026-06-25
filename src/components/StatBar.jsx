const StatBar = ({ coins, gems, level }) => {
  return (
    <div className="mb-4 grid grid-cols-3 gap-2">
      <div className="rounded-xl bg-white/10 p-3 text-center text-white shadow">
        <p className="text-xs opacity-70">Coins</p>
        <p className="font-bold">{coins}</p>
      </div>
      <div className="rounded-xl bg-white/10 p-3 text-center text-white shadow">
        <p className="text-xs opacity-70">Gems</p>
        <p className="font-bold">{gems}</p>
      </div>
      <div className="rounded-xl bg-white/10 p-3 text-center text-white shadow">
        <p className="text-xs opacity-70">Level</p>
        <p className="font-bold">{level}</p>
      </div>
    </div>
  );
};

export default StatBar;