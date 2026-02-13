function diagonalAttack(data){

  let sumDig1 = 0;
  let sumDig2 = 0;

  let info = data

  let newArr = []

 // let arr = data.split(", ")

  for(let i = 0; i< info.length; i++){

    arr = info[i].split(" ");

    sumDig1 += Number(arr[i]);

    sumDig2 += Number(arr[(arr.length-1) - i]);

    newArr.push(arr)

  }

  //console.log(arr);

  if(isEqual(sumDig1, sumDig2)){

    

    //return console.log(newArr[0][0]) ;

    return setDiagonals(newArr);    

  }

  for(let row of newArr){

     //console.log(row.join("\t"))
     console.log(row.join(" "))

    } 

  function isEqual(a, b){

    if(a === b){

      return true;

    }else {

      return false;

    }

  }

  function setDiagonals(arr){

    let lastArr = []

    for(let i = 0; i < arr.length; i++){

      let temp = arr[i];

      for(let j = 0; j < temp.length; j++){

        if(j !== i && j !== (temp.length-1) - i){

          temp[j] = sumDig1;
        }
      }

      lastArr.push(temp)
    }

    
  for(let row of lastArr){

     //console.log(row.join("\t"))

     console.log(row.join(" "))

  }

  }                          

}

diagonalAttack(
['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']

)
