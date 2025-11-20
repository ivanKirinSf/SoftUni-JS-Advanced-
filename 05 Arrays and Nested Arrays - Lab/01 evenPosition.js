function evenPosition(info){

    let arr = info;

    let res = "";

    for(let i = 0; i < arr.length; i++){

        let curr = arr[i];

        if(i % 2 == 0){

            res += ` ${curr}`
        }

        //console.log(curr)
    }

    console.log(res)

}

evenPosition(['5', '10'])
