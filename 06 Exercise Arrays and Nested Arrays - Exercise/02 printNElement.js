function printNElement(arr, n){

    let res = [];

    for(let i = 0; i < arr.length; i += n){

        let temp = arr[i];

        res.push(temp)
    }

    return res;
}

console.log(printNElement(
['1', 
'2',
'3', 
'4', 
'5'], 
6
))
