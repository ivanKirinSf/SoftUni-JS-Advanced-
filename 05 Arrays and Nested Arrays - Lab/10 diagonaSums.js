function diagonaSums(arr){

    let length = arr.length;

    //let index = 0;

    let diagonalA = 0;

    let diagonalB = 0;

    let index = arr.length - 1;

    let res = [];

    for(let i = 0; i < arr.length; i++){

        //index = arr.length - 1;

        diagonalA += arr[i][i];

        diagonalB += arr[i][index];

        index -= 1;

    }
    
    res.push(diagonalA)
    res.push(diagonalB)

    return res.join(" ")

}

diagonaSums(
 [[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]
)
