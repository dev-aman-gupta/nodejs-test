const FruitBasket = require("./FruitBasket");
const fs = require('fs').promises;

async function fruitBasketProblem() {
    let content = await fs.readFile('./input.json', 'utf8');
    console.log('Processing Input data ... ');
    const input = JSON.parse(content);
    let fruitBaskets = input.map(basket => {
        let fruitBasket = new FruitBasket(basket.id, basket.max_weight);
        fruitBasket.addFruits(basket.contents);
        return fruitBasket;
    })
    console.log('Calculating output ... ');
    let output = fruitBaskets.map(fruitBasket => {
        let basketDetails = fruitBasket.getBasetDetails();
        return basketDetails;
    })
    output = JSON.stringify(output);
    let res = await fs.writeFile('./output.json', output);
    console.log(' Output saved in output.json ');
    return;
}

fruitBasketProblem();
