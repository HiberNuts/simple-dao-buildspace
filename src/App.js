import "./App.css";
import { useAddress, useMetamask, useEditionDrop } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";

function App() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  const editionDrop = useEditionDrop("0xc5dCC40Dbf6B6E22Ac53b2C94C3C8ed3a5a8e472");

  useEffect(() => {
    if (!address) {
      return;
    }

    //checking balance and see if they have nft bruh!!

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);

        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get balance", error);
      }
    };

    checkBalance();
  }, [address, editionDrop]);

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
