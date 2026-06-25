export const initialGameState = {
  coins: 5000,
  gems: 120,
  level: 1,
  totalSpins: 0,
  biggestWin: 0,
  currentBet: 100,
  lastWin: 0,
  currentScreen: "home",

  missions: [
    {
      id: 1,
      title: "Spin 10 times",
      progress: 0,
      target: 10,
      reward: 500,
      claimed: false,
    },
    {
      id: 2,
      title: "Win 2000 coins",
      progress: 0,
      target: 2000,
      reward: 800,
      claimed: false,
    },
    {
      id: 3,
      title: "Reach 200 gems",
      progress: 0,
      target: 200,
      reward: 300,
      claimed: false,
    },
  ],

  rewards: [
    { day: 1, reward: 200, claimed: false },
    { day: 2, reward: 300, claimed: false },
    { day: 3, reward: 500, claimed: false },
    { day: 4, reward: 5, type: "gems", claimed: false },
    { day: 5, reward: 700, claimed: false },
    { day: 6, reward: 10, type: "gems", claimed: false },
    { day: 7, reward: 1500, claimed: false },
  ],

  storePacks: [
    { id: 1, title: "Small Coin Pack", amount: 1000, price: "$0.99", type: "coins" },
    { id: 2, title: "Big Coin Pack", amount: 5000, price: "$2.99", type: "coins" },
    { id: 3, title: "Gem Pack", amount: 50, price: "$1.99", type: "gems" },
  ],
};