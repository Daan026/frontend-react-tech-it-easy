import { inventory } from "../constants/inventory.js";


function calculateRemainingStock(stockItems = inventory) {
    let totalRemainingStock = 0;

    for (let i = 0; i < stockItems.length; i++) {
        const remainingStock = stockItems[i].originalStock - stockItems[i].sold;
        totalRemainingStock += remainingStock;
        console.log({remainingStock});
    }

    console.log(totalRemainingStock);
    return totalRemainingStock;
}

// Exporteer de functie
export default calculateRemainingStock;
