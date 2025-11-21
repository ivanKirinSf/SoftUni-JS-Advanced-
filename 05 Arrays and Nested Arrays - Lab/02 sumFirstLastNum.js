function sumFirstLastNum(info){

    let res = Number(info.shift()) + Number(info.pop());

    console.log(res);

}

sumFirstLastNum(['5', '10'])
