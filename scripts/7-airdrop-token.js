import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x7797a4401E834bd328bB477A562f170B4260c9Cf");
const editionDrop = sdk.getEditionDrop("0xc5dCC40Dbf6B6E22Ac53b2C94C3C8ed3a5a8e472");

(async () => {
  try {
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log("No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!");
      process.exit(0);
    }

    //loop thorugh array of addresses

    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();
