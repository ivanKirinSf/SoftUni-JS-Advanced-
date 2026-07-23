function lowestPriceInTheCity(info){

   let products = {};

   for(let el of info){

      let temp = el.split(" | ");

      let town = temp.shift();

      let product = temp.shift();

      let price = Number(temp.shift());


      if(!products.hasOwnProperty(product)){

         products[product] = {

         city: town,
         price: price

      }
      } else{

         if(products[product].price > price){

            products[product].price = price;

            products[product].city = town;        

         }

      }

      }

      //console.log(product)   

  for(let line in products){

   //let values = Object.values(line)

   //console.log(`${line} -> ${line.[1]} ({${line.[2]}})`)

   let entries = Object.entries(line);

   console.table(entries)
  }

}
