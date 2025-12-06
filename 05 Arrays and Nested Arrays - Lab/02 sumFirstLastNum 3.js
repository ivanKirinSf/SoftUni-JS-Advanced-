function lastKnum(n, k){

    let arr = [1];

    let ArrLength = n;

    for(let i = 0; i < n-1; i++){

        let res = 0;

        index = i-k;
        while(index <= i){

            if(res !== NaN){

               res += arr[index]; 
            }            
            
            index ++

        }


        if(res !== NaN){

            arr.push(res)
            
        }
        
    }



}

lastKnum(6, 3)
