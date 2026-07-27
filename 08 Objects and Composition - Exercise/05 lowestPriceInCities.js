function lowestPriceCities(info){

    let products = {};

 for(let el of info){

    let temp = el.split(" | ");

    let prodCity = temp.shift();

    let proName = temp.shift();

    let proPrice = Number(temp.shift());

    if(!products.hasOwnProperty(proName)){

       products[proName] = {

           town: prodCity,
           price: proPrice

       }

    }else{

        if(products[proName].price > proPrice){

            products[proName].price = proPrice;

            products[proName].town = prodCity;

        }
    }

    //console.log(proPrice);

 }   

 for(let line in products){

console.log(`${line} -> ${products[line].price} (${products[line].town})`)

 }

}

lowestPriceCities(
['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
