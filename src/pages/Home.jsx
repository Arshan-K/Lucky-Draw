import Header from "../components/Header";
import StatBar from "../components/StatBar";
import { Gift, Sparkles, Trophy, Wallet } from "lucide-react";

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
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/20 ring-1 ring-yellow-300/30">
          <Trophy className="h-10 w-10 text-yellow-300" strokeWidth={2.3} />
        </div>

        <h2 className="mb-2 text-2xl font-bold">Treasure Spin Adventure</h2>
        <p className="mb-6 text-sm text-white/80">
          Spin the lucky reels, earn coins, complete missions and unlock rewards.
        </p>

        <button
          onClick={() => setCurrentScreen("game")}
          className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-3 text-lg font-bold text-slate-900 shadow-lg transition hover:scale-105"
        >
          <Sparkles className="h-5 w-5" />
          Play Now
        </button>
      </div>

      <div className="mt-5 rounded-2xl bg-white/10 p-4 text-white shadow">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-pink-300" />
            <h3 className="font-semibold">Quick Bonus</h3>
          </div>
          <Wallet className="h-5 w-5 text-yellow-300" />
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
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Wallet className="h-4 w-4 text-yellow-300" />
            <span>Last Win</span>
          </div>
          <p className="mt-2 text-xl font-bold text-yellow-300">
            {gameState.lastWin}
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Trophy className="h-4 w-4 text-green-300" />
            <span>Biggest Win</span>
          </div>
          <p className="mt-2 text-xl font-bold text-green-300">
            {gameState.biggestWin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;