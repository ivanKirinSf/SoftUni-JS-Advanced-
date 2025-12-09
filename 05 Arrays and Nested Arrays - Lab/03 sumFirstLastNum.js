function lastKnum(n, k){

    let arr = [1];

   // console.log(arr[0])

    let sum = 0;

    for(let i = 1; i < n; i++){

        let curr = arr[i];

        for(let j = i-k; j < i; j++){

            let newCurr = arr[j];

            if(newCurr){

                sum += Number(arr[j]);

            }else{
                continue
            }            

            //arr.push(sum)
        }

        arr.push(sum);

        sum = 0;

       // console.log(curr)
    }

    return arr

}

lastKnum(1, 2)
