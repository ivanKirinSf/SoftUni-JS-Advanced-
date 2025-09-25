function fruit(fruit, weight, price){

    let wKg = (weight/1000).toFixed(2);

    let sum = (wKg*price).toFixed(2);       

    console.log(`I need $${sum} to buy ${wKg} kilograms ${fruit}.`);

    

}

fruit('orange', 2500, 1.80);
