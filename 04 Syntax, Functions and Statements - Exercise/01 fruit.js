function fruit(type, grams, price){

    let kg = grams/1000;

    let cost = kg*price;

    console.log(`I need $${cost.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)

}

fruit('orange', 2500, 1.80)
