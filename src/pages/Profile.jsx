import Header from "../components/Header";
import StatBar from "../components/StatBar";
import { Coins, ShieldUser, Volume2, VolumeX } from "lucide-react";

const Profile = ({ gameState, handleResetProgress, toggleSound }) => {
  return (
    <div>
      <Header title="Profile" subtitle="Player stats and progress" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="rounded-3xl bg-white/10 p-5 text-center text-white shadow">
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/15 ring-1 ring-yellow-300/30">
          <ShieldUser className="h-10 w-10 text-yellow-300" strokeWidth={2.2} />
        </div>
        <h3 className="text-xl font-bold">Treasure Player</h3>
        <p className="text-sm text-white/70">Level {gameState.level}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <p className="text-sm text-white/70">Total Spins</p>
          <p className="mt-2 text-xl font-bold">{gameState.totalSpins}</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Coins className="h-4 w-4 text-yellow-300" />
            <span>Biggest Win</span>
          </div>
          <p className="mt-2 text-xl font-bold text-yellow-300">
            {gameState.biggestWin}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white/10 p-4 text-white shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Sound</p>
            <p className="text-sm text-white/60">Turn game sounds on or off</p>
          </div>

          <button
            onClick={toggleSound}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-bold ${
              gameState.soundEnabled
                ? "bg-green-500 text-white"
                : "bg-slate-700 text-white/80"
            }`}
          >
            {gameState.soundEnabled ? (
              <>
                <Volume2 className="h-4 w-4" />
                ON
              </>
            ) : (
              <>
                <VolumeX className="h-4 w-4" />
                OFF
              </>
            )}
          </button>
        </div>
      </div>

      <button
        onClick={handleResetProgress}
        className="mt-6 w-full rounded-2xl bg-red-500 px-6 py-3 font-bold text-white"
      >
        Reset Progress
      </button>
    </div>
  );
};

export default Profile;