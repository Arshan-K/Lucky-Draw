const StorePackCard = ({ pack, onBuy }) => {
  return (
    <div className="rounded-2xl bg-white/10 p-4 text-white shadow">
      <h3 className="mb-2 text-lg font-semibold">{pack.title}</h3>
      <p className="mb-2">
        {pack.type === "gems" ? "💎" : "💰"} {pack.amount}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-300">{pack.price}</span>
        <button
          onClick={() => onBuy(pack)}
          className="rounded-lg bg-green-500 px-4 py-2 font-semibold"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default StorePackCard;