function negativePositiveNums(arr){

    let res = [];

    for(let el of arr){

        //console.log(el)

        if(el < 0){

           res.unshift(el);

        }else {

            res.push(el);

        }
    }

    console.log(res)

}

negativePositiveNums([3, -2, 0, -1])
