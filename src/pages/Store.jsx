import Header from "../components/Header";
import StatBar from "../components/StatBar";
import StorePackCard from "../components/StorePackCard";

const Store = ({ gameState, handleBuyPack }) => {
  return (
    <div>
      <Header title="Store" subtitle="Grab extra coins and gems" />
      <StatBar
        coins={gameState.coins}
        gems={gameState.gems}
        level={gameState.level}
      />

      <div className="space-y-4">
        {gameState.storePacks.map((pack) => (
          <StorePackCard key={pack.id} pack={pack} onBuy={handleBuyPack} />
        ))}
      </div>
    </div>
  );
};

export default Store;