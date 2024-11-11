import {bestSellingTv} from "../constants/inventory.js";

const type = bestSellingTv.type
const brand = bestSellingTv.brand
const name = bestSellingTv.name
function productDisplay() {

    return `${type} ${brand} ${name};`
}




export default productDisplay