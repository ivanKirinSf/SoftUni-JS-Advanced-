function agrEl(arr){

    let sum = 0;
    let invSum = 0;
    let str = ""

   for(let i = 0; i < arr.length; i++){

    let curr = arr[i];

    sum += arr[i];

    let invCurr = 1/curr;

    invSum += invCurr

    str += curr

    //console.log(current);

   }   

   console.log(sum);
   console.log(invSum);
   console.log(str);

}

agrEl([2, 4, 8, 16])
