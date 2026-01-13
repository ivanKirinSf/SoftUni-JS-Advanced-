function sortingNum(arr){

    let res = [];

    let sorted = arr.sort((a, b) => a-b);

    index = 0;
    while(arr.length > 0){

        let num1 = sorted.shift();

        res.push(num1);

        let num2 = sorted.pop();

        res.push(num2);        

        index ++
    }    

    return res

}

console.log(sortingNum([
    1, 65, 3, 52, 48, 63, 31, -3, 18, 56
]))
