import { Coins, Gem, ShoppingCart } from "lucide-react";

const StorePackCard = ({ pack, onBuy }) => {
  const isGem = pack.type === "gems";

  return (
    <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
      <h3 className="mb-3 text-lg font-semibold">{pack.title}</h3>

      <div className="mb-3 flex items-center gap-2">
        {isGem ? (
          <Gem className="h-5 w-5 text-cyan-300" />
        ) : (
          <Coins className="h-5 w-5 text-yellow-300" />
        )}
        <span className="text-base font-medium">{pack.amount}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-yellow-300">{pack.price}</span>
        <button
          onClick={() => onBuy(pack)}
          className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 font-semibold"
        >
          <ShoppingCart className="h-4 w-4" />
          Buy
        </button>
      </div>
    </div>
  );
};

export default StorePackCard;