import { inventory } from "../constants/inventory.js";

function stockCalculator(stockItems = inventory) {
    let totalStock = 0;

    for (let i = 0; i < stockItems.length; i++) {
        totalStock += stockItems[i].originalStock;

    }

    console.log(totalStock);
    return totalStock;
}

export default stockCalculator;
