function listOfNames(arr){

    let index = 1;

   let sorted = arr.sort((a, b) => a.localeCompare(b));

   for(let name of sorted){

    //let index = 0

    let text = index + ". " + name;

    index ++

    console.log(text)

   }

    //console.log(arr)


}

listOfNames(["John", "Bob", "Christina", "Ema", "ani"])
