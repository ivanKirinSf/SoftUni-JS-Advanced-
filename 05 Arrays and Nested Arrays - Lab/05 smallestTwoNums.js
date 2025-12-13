function smallestTwoNums(arr){

    
    let sorted = arr.sort((a,b) => a - b );

    let twoNum = [];

    for(let i = 0; i < 2; i++){

        let temp = arr[i];

        twoNum.push(temp)

        //console.log(temp)

    }

    //console.log(sorted)

    console.log(twoNum.join(" "))
    
}

smallestTwoNums([30, 15, 50, 5])
