function diagonalAttack(data){

    let list = data.split(", ")

   if(equalsSums(data)){     
    

   }

   function equalsSums(arr){

    let sumDig1 = 0;

    let sumDig2 = 0;

   for(let i = 0; i < arr.length; i++){

    sumDig1 += Number(arr[i][i]);

    sumDig2 += Number(arr[i][(arr.length-1)-i]);   

   }    
   
   console.log(sumDig1);

   console.log(sumDig2);

   }

}
