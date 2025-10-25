function aggregateElements(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){

    sum += arr[i];

   }

   console.log(sum)


   let sumInv = 0;

    for(let i = 0; i < arr.length; i++){

    sumInv += 1/arr[i];

   }

   console.log(sumInv);

   let line = "";

    for(let i = 0; i < arr.length; i++){

        line += arr[i];

    }

    console.log(line);

}

aggregateElements([2, 4, 8, 16])
