function biggerHalf(str){

    let sorted = str.sort((a,b) => a - b);

    let mid = Math.floor(sorted.length / 2);

    let res = []


    for(let i = mid; i < str.length; i++){

        let curr = sorted[i];

        res.push(curr);

    }

    return res
    
}

biggerHalf([4, 7, 2, 5])
