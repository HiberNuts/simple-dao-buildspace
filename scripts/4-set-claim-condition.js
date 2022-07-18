import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";
import colors from "colors";

const editionDrop = sdk.getEditionDrop("0xc5dCC40Dbf6B6E22Ac53b2C94C3C8ed3a5a8e472");

(async () => {
  try {
    const claimCondition = [
      {
        strtTime: new Date(),
        maxQuantity: 50_000,
        price: 0,
        quantityLimitPerTransaction: 1,
        waitInSeconds: MaxUint256,
      },
    ];

    await editionDrop.claimConditions.set("0", claimCondition);
    console.log(colors.blue("✅ Successfully set claim condition!"));
  } catch (error) {
    console.error(colors.red("Failed to set claim condition", error));
  }
})();
