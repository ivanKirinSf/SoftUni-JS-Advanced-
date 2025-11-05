function sameNumbers(num){

   let str = `${num}`;

   //let t = typeof(str)

   let char = str[0];

   let isSame = true;

   let sum = 0;

   for(let i = 0; i < str.length; i++){

   let curChar = str[i];   

   if(char !== curChar){

      isSame = false;

      break;
   }

   char = str[i];

   }

   console.log(isSame);

   let index = 0;
   while(index < str.length){

      sum += Number(str[index]);

      index ++
   }

   console.log(sum);

}

sameNumbers(2222222)
