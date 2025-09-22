let arr = [1, 2, 3];

//console.log(arr.length)

function sum(info){

    let sum = 0;

    for(let i = 0; i < info.length; i++){

    sum += info[i];

   }

   //return sum;
   console.log(sum)
}

sum(arr)

function inverse(info){

    let inv = info.map(num => -num);

    let sumInv = 0;

    for(let i = 0; i < inv.length; i++){

    sumInv += inv[i];

   }

    //return sumInv;
    console.log(sumInv)

}

inverse(arr)

function concat(info){

    

}

concat(arr)
