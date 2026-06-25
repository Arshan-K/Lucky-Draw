const tabs = [
  { key: "home", label: "Home" },
  { key: "missions", label: "Missions" },
  { key: "rewards", label: "Rewards" },
  { key: "store", label: "Store" },
  { key: "profile", label: "Profile" },
];

const BottomNav = ({ currentScreen, setCurrentScreen }) => {
  return (
    <div className="fixed bottom-4 left-1/2 w-[360px] -translate-x-1/2 rounded-2xl bg-slate-900/90 p-2 shadow-lg">
      <div className="grid grid-cols-5 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setCurrentScreen(tab.key)}
            className={`rounded-xl px-2 py-3 text-sm font-medium transition ${
              currentScreen === tab.key
                ? "bg-yellow-400 text-slate-900"
                : "text-white/70 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;