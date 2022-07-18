import "./App.css";
import { useAddress, useMetamask } from "@thirdweb-dev/react";

function App() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);
  
  
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to NarutoDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // This is the case where we have the user's address

  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
}

export default App;
