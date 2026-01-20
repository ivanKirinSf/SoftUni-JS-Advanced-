function magicMatrix(arr){

for(let i = 0; i < arr.length-1; i++){

    let rowOne = 0;
    let rowTwo = 0;
    let colOne = 0;
    let colTwo = 0;

    arr[i].forEach(element =>  rowOne += Number(element));
    arr[i+1].forEach(element =>  rowTwo += Number(element));
    arr.forEach(row =>  colOne += Number(row[i]));
    arr.forEach(row =>  colTwo += Number(row[i+1]));

    //console.log(colTwo)

    if(rowOne !== rowTwo || colOne !== colTwo){

       return false;

    }else{

        return true;
    }

}

//console.log(rowOne)

}



console.log(magicMatrix(
[[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]
))


