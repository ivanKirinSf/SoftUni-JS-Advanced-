function еxtractIncreasingSubsetFromArray(arr){

    let res = [];

    res.push(arr[0]);

    //console.log(res)

    for(let i = 1; i < arr.length; i++){

        let cur = arr[i];

        if(cur >= res[res.length-1]){

            res.push(cur)
        }
    }

    console.log(res)

}

еxtractIncreasingSubsetFromArray(
[1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]
)
