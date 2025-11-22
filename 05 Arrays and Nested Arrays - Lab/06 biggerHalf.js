function biggerHalf(arr){

    let sortedArr = arr.sort((a,b)=> a - b);

    let mid = Math.floor(sortedArr.length / 2 );

    let output = [];

    for(let i = mid; i < sortedArr.length; i++){

        let curr = sortedArr[i];

        output.push(curr);


    }

    console.log(output)

}

biggerHalf([4, 7, 2, 5])
