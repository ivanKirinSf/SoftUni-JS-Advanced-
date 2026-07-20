function lowestPriceInTheCity(info){

   let arr = [];

   let isValid = false;

   let index = 0;
   

  for(let el of info){

   let obj = {};

        let temp = el.split(" | ");

        let town = temp.shift();

        let product = temp.shift();

        let price = Number(temp.shift());

        obj.city = town;

        obj.product = product;

        obj.price = price;

        if(arr.length === 0){
         arr.push(obj);

         continue;
        }

        for(let el of arr){

         if(product !== el.product){
            isValid = true;
            index++;
         }else{
            isValid = false;            
            break;
         }

        }

        if(isValid === true){

         if(arr[index].price !== price){

            arr.push(obj)                       

         } 
         
        }else{

         if(arr[index].price > price){

            arr[index].price = price;
            arr[index].city = town;            

         }         
          

        }     
      

        //console.log(index)   

        index = 0

  }

  console.table(arr);


}
