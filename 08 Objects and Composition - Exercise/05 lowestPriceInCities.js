function lowestPriceInCities(data){

    let result = {};

    for(let el of data){

        let temp = el.split(" | ");

        let town = temp.shift();
        let product = temp.shift();
        let price = Number(temp.shift());

        console.log(price)
    }

}
