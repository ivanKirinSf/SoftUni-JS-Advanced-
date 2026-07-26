function lowestPriceCities(info){

    let products = {};

    for(let line of info){
        let temp = line.split("|");

        let city = temp.shift();

        let productName = temp.shift();

        let productPrice = Number(temp.shift());

        if(!products.hasOwnProperty(productName)){

          products[productName] = {

            town: city,
            price: productPrice

        }

        }else{

            if(products[productName].price > productPrice){

                products[productName].price = productPrice;
                products[productName].town = city;

            }        

        }        

        //console.log(price);

    }

    //console.table(products);

    for(const line in products){

        

        console.log(`${products[line]} -> ${products[line].price} (${products[line].town})`);

    }

}
