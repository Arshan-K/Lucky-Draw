import Header from "../components/Header";
import StatBar from "../components/StatBar";

const Home = ({ gameState, setCurrentScreen }) => {
  return (
    <div>
      <Header title="Lucky Treasure Quest" subtitle="Spin, win and collect rewards" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 p-6 text-center text-white shadow-lg">
        <div className="mb-4 text-6xl">🏆</div>
        <h2 className="mb-2 text-2xl font-bold">Treasure Spin Adventure</h2>
        <p className="mb-6 text-sm text-white/80">
          Spin the lucky reels, earn coins, complete missions and unlock rewards.
        </p>

        <button
          onClick={() => setCurrentScreen("game")}
          className="rounded-2xl bg-yellow-400 px-8 py-3 text-lg font-bold text-slate-900 shadow-lg transition hover:scale-105"
        >
          Play Now
        </button>
      </div>

      <div className="mt-5 rounded-2xl bg-white/10 p-4 text-white shadow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">Quick Bonus</h3>
          <span className="text-2xl">🎁</span>
        </div>
        <p className="mb-3 text-sm text-white/70">
          Every 5 spins you earn a bonus gem automatically.
        </p>
        <div className="rounded-xl bg-slate-900/60 p-3 text-sm">
          Spins done: <span className="font-bold">{gameState.totalSpins}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <p className="text-sm text-white/70">Last Win</p>
          <p className="mt-2 text-xl font-bold text-yellow-300">
            💰 {gameState.lastWin}
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <p className="text-sm text-white/70">Biggest Win</p>
          <p className="mt-2 text-xl font-bold text-green-300">
            💎 {gameState.biggestWin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;