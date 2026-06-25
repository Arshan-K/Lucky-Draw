const STORAGE_KEY = "lucky-treasure-game";

export const loadGameState = (initialState) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  } catch (error) {
    console.error("Error loading game state:", error);
    return initialState;
  }
};

export const saveGameState = (gameState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  } catch (error) {
    console.error("Error saving game state:", error);
  }
};

export const resetGameState = () => {
  localStorage.removeItem(STORAGE_KEY);
};