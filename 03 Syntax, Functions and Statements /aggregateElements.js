let arr = [2, 4, 8, 16];

//console.log(arr.length)

function sum(info){

    let sum = 0;

    for(let i = 0; i < info.length; i++){

    sum += info[i];

   }

   return sum;
   //console.log(sum)
}

sum(arr)

function inverse(info){

    
    let sumInv = 0;

    for(let i = 0; i < info.length; i++){

    sumInv += 1/info[i];

   }

    return sumInv;
    //console.log(sumInv)

}

inverse(arr)

function concat(info){

    let line = "";

    for(let i = 0; i < info.length; i++){

        line += info[i];

    }

    return line;
    //console.log(line)


}

concat(arr)

