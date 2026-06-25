import { Coins, ShoppingBag } from "lucide-react";

const InsufficientCoinsPopup = ({ visible, onClose, onGoToStore }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-[320px] rounded-3xl border border-white/10 bg-slate-900 p-6 text-center shadow-2xl">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/15">
          <Coins className="h-7 w-7 text-yellow-300" />
        </div>

        <h2 className="text-xl font-bold text-white">Not enough coins</h2>
        <p className="mt-2 text-sm text-white/70">
          You don’t have enough coins for this bet. Buy more coins from the store?
        </p>

        <div className="mt-5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white"
          >
            Cancel
          </button>
          <button
            onClick={onGoToStore}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-4 py-3 font-bold text-slate-900"
          >
            <ShoppingBag className="h-4 w-4" />
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsufficientCoinsPopup;