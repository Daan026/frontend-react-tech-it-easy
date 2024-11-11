import {inventory} from "../constants/inventory.js";



function amountSold(tvArray = inventory) {
    let total = 0;

    for (let i = 0; i < tvArray.length; i++) {
        total = [i] + tvArray[i].sold;
        console.log(total);
    }

    return total;
}

export default amountSold