const SlotGrid = ({ grid }) => {
  return (
    <div className="grid grid-cols-5 gap-2 rounded-2xl bg-white/10 p-4">
      {grid.flat().map((symbol, index) => (
        <div
          key={index}
          className="flex h-14 items-center justify-center rounded-xl bg-slate-800 text-2xl shadow"
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default SlotGrid;