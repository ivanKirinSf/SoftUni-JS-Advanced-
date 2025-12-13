function proOddPos(arr){

    let oddNums = [];

    

    for(let i = 0; i < arr.length; i++){

        if( i % 2 !== 0){

            oddNums.push(arr[i]);

        }
    }

    let double = oddNums.map(n => n*2);

    let reversed = double.reverse(double);

    return reversed.join(" ");    

}

proOddPos([3, 0, 10, 4, 7, 3])
