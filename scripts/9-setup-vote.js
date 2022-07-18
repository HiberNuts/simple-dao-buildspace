import sdk from "./1-initialize-sdk.js";

// This is our governance contract.
const vote = sdk.getVote("0x8c918F2360463a251C8B7a8e65c4A0043ec61cF6");

// This is our ERC-20 contract.
const token = sdk.getToken("0x7797a4401E834bd328bB477A562f170B4260c9Cf");

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log("Successfully gave vote contract permissions to act on token contract");
  } catch (error) {
    console.error("failed to grant vote contract permissions on token contract", error);
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance,
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number((ownedAmount / 100) * 90);

    await token.transfer(vote.getAddress(), percent90);
    console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();
