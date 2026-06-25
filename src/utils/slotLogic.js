export const symbols = ["💰", "💎", "👑", "⭐", "🎁", "⚡"];

export const generateSpinGrid = () => {
  return Array.from({ length: 3 }, () =>
    Array.from({ length: 5 }, () => symbols[Math.floor(Math.random() * symbols.length)])
  );
};

export const calculateWin = (grid, bet) => {
  let win = 0;

  grid.forEach((row) => {
    const counts = {};

    row.forEach((symbol) => {
      counts[symbol] = (counts[symbol] || 0) + 1;
    });

    Object.values(counts).forEach((count) => {
      if (count >= 3) {
        win += count * bet;
      }
    });
  });

  return win;
};