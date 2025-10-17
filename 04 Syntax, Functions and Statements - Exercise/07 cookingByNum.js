function cookingByNum(arg, ...params){


   let operations = {

      "chop" : (num) => num/2,
      "dice" : (num) => Math.sqrt(num),
      "spice" : (num) => num +1,
      "bake" : (num) => num*3,
      "fillet" : (num) => num*0.8,

   }

   let num = Number(arg);

   for(let el of params){

      num = operations[el](num);

      console.log(num)

   }

}

cookingByNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
