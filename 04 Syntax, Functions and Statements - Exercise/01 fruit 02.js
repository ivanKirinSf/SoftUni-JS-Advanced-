function fruit(type, num1, num2){

    let weightInKg = num1/1000;

    let price = num2;

    let money = weightInKg*price;
    
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)

}

fruit('apple', 1563, 2.35)
