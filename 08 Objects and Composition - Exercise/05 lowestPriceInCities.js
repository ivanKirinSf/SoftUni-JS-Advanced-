function lowestPriceInCities(data){

    let res = [];

    let obj = {};

   for(let el of data){

    if(!el.trim()){

        continue;

    }

    let temp = el.split(" | ");

    let townName = temp.shift();

    let productName = temp.shift();

    let productPrice = Number(temp.shift());

    if(obj.product === productName){
        console.log("yes")
    }
    obj.city = townName;

    obj.product = productName;

    obj.price = productPrice;

    //console.log(obj)

   }



}
