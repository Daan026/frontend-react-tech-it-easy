import './App.css';
import amountSold from "./helpers/amountsold.js";
import stockCalculator from "./helpers/stockcalculator.js";
import calculateremainingstock from "./helpers/calculateremainingstock.js";
import productDisplay from "./helpers2/productDisplay.js"
import {inventory} from "./constants/inventory.js";

function App() {

    return (<>
            <h1>Begin hier met met maken van de applicatie!</h1>


            <p>{amountSold(inventory)}</p>

            <p>{stockCalculator(inventory)}</p>

            <p>{calculateremainingstock(inventory)}</p>

            <p>{productDisplay(inventory)}</p>
        </>
    )

}

export default App
