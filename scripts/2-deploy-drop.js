import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { read, readFileSync } from "fs";
import colors from "colors";



(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "NarutoDAO Membership",
      description: "A DAO for fans of naruto",
      image: readFileSync("scripts/assets/naruto.png"),

      //y addressZero, cause we dont need the profit from sale of nft
      primary_sale_recipient: AddressZero,
    });

    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();

    console.log("✅ Successfully deployed editionDrop contract, address:", editionDropAddress);
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log(colors.red("failed to deploy editionDrop contract", error));
  }
})();
