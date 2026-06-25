import Header from "../components/Header";
import SlotGrid from "../components/SlotGrid";
import StatBar from "../components/StatBar";

const Gameplay = ({
  gameState,
  slotGrid,
  handleSpin,
  changeBet,
  handleMaxBet,
  setCurrentScreen,
  isSpinning,
}) => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentScreen("home")}
          className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white"
        >
          ← Back
        </button>
        <div className="text-center">
          <h2 className="text-lg font-bold text-white">Gameplay</h2>
          <p className="text-xs text-white/60">Spin the lucky reels</p>
        </div>
        <div className="w-[60px]" />
      </div>

      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="rounded-3xl bg-gradient-to-br from-purple-500/20 to-yellow-500/20 p-4 shadow-lg">
        <Header title="Lucky Reels" subtitle="Match 3+ symbols to win" />
        <SlotGrid grid={slotGrid} isSpinning={isSpinning} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <p className="text-sm text-white/70">Current Bet</p>
          <p className="mt-2 text-xl font-bold text-yellow-300">{gameState.currentBet}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <p className="text-sm text-white/70">Last Win</p>
          <p className="mt-2 text-xl font-bold text-yellow-300">
            {gameState.lastWin}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => changeBet(-50)}
          className="flex-1 rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white"
        >
          - Bet
        </button>
        <button
          onClick={() => changeBet(50)}
          className="flex-1 rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white"
        >
          + Bet
        </button>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`w-[72%] rounded-2xl px-6 py-4 text-lg font-bold shadow-lg transition ${
            isSpinning
              ? "bg-slate-500 text-white"
              : "bg-yellow-400 text-slate-900 hover:scale-[1.02]"
          }`}
        >
          {isSpinning ? "Spinning..." : "Spin Now"}
        </button>

        <button
          onClick={handleMaxBet}
          disabled={isSpinning}
          className="w-[28%] rounded-2xl bg-pink-500 px-3 py-4 text-sm font-bold text-white shadow-lg"
        >
          Max Bet
        </button>
      </div>
    </div>
  );
};

export default Gameplay;