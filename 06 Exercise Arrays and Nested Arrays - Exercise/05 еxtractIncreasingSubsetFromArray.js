function solve(arr){

    let max = arr[0];

    let res = [];

    for(let el of arr){

        let temp = el;

        if(temp >= max){

            max = temp;

            res.push(max)
        }

    }

    return res

}

console.log(solve([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24
]))
