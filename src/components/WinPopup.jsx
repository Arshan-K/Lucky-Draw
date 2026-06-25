import { Coins, Sparkles } from "lucide-react";

const WinPopup = ({ amount, visible }) => {
  if (!visible || amount <= 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
      <div className="animate-bounce rounded-3xl border border-yellow-300/40 bg-gradient-to-br from-yellow-300 to-orange-400 px-8 py-6 text-center shadow-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
          <Sparkles className="h-7 w-7 text-slate-900" />
        </div>

        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-slate-900/70">
          You Won
        </p>

        <div className="mt-2 flex items-center justify-center gap-2">
          <Coins className="h-7 w-7 text-slate-900" />
          <h2 className="text-4xl font-extrabold text-slate-900">{amount}</h2>
        </div>
      </div>
    </div>
  );
};

export default WinPopup;