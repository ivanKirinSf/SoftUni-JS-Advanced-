function sumFirstAndLastNum(arr){

    let res = Number(arr.pop()) + Number(arr.shift());

    console.log(res)

}

sumFirstAndLastNum(['20', '30', '40'])
