function lowestPriceInTheCity(info){

let products = {};

for(let el of info){

   let temp = el.split(" | ");

   let city = temp.shift();

   let product = temp.shift();

   let price = Number(temp.shift());

   if(!products.hasOwnProperty(product)){

      products[product] = {

         town: city,
         price: price

      }

   }else {

      if(products[product].price > price){

         products[product].price = price;
         products[product].town = city;

      }

   }
   //console.log(price)
}

for(let line in products){

      console.log(`${line} -> ${products[line].price} (${products[line].town})`);

   }
}
