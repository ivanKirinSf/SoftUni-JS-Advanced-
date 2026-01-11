function rotateArray(arr, num){

    

    let index = 0;

    while(index < num){

        for(let i = 0; i < arr.length; i++){

            let el = arr.shift(arr);

            arr.push(el)

            //console.log(el)
            console.log(arr)



        }

        index ++
    }

}
