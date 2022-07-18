import sdk from "./1-initialize-sdk.js";
import { read, readFileSync } from "fs";
import colors from "colors";

const editionDrop = sdk.getEditionDrop("0xc5dCC40Dbf6B6E22Ac53b2C94C3C8ed3a5a8e472");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leaf village headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log(colors.blue("✅ Successfully created a new NFT in the drop!"));
  } catch (e) {
    console.log(colors.red("failed to create the new NFT", error));
  }
})();
