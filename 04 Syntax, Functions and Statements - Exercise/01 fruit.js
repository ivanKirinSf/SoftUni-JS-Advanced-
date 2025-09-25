function fruit(fruit, weight, price){

    let wKg = weight/1000;

    let sum = wKg*price;       

    console.log(`I need $${sum.toFixed(2)} to buy ${wKg.toFixed(2)} kilograms ${fruit}.`);

    

}

fruit('orange', 2500, 1.80);
