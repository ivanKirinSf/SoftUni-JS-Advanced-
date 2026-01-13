function solve2(arr){

    let sorted = arr.sort((a, b) => a.localeCompare(b));

    for(let i = 0; i < arr.length; i++){

        console.log((i+1) + "." + arr[i])

    }

    //console.log(sorted)

}

solve2([
    "John",
     "Bob", 
     "Christina", 
     "Ema"
    ])
