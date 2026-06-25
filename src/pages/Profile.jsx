import Header from "../components/Header";
import StatBar from "../components/StatBar";

const Profile = ({ gameState, handleResetProgress }) => {
  return (
    <div>
      <Header title="Profile" subtitle="Player stats and progress" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="rounded-3xl bg-white/10 p-5 text-center text-white shadow">
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-3xl text-slate-900">
          A
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
          <p className="text-sm text-white/70">Biggest Win</p>
          <p className="mt-2 text-xl font-bold text-yellow-300">
            💰 {gameState.biggestWin}
          </p>
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