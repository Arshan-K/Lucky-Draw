export const symbols = ["💰", "💎", "👑", "⭐", "🎁", "⚡"];

export const generateSpinGrid = () => {
  return Array.from({ length: 3 }, () =>
    Array.from({ length: 5 }, () => symbols[Math.floor(Math.random() * symbols.length)])
  );
};

export const calculateWin = (grid, bet) => {
  let totalWin = 0;

  grid.forEach((row) => {
    let currentStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < row.length; i++) {
      if (row[i] === row[i - 1]) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 1;
      }
    }

    if (maxStreak >= 3) {
      totalWin += maxStreak * bet;
    }
  });

  return totalWin;
};