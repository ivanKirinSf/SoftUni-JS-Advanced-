function cookingByNum(arg, ...params){

    let programs = {

        "chop" : (num) => num/2,
        "dice" : (num) => Math.sqrt(num),
        "spice": (num) => num+1,
        "bake": (num) => num*3,
        "fillet": (num) => num*0.8,
    }

    let num = Number(arg);

    for(let op of params){

        console.log(programs[op])

        num = programs[op](num);

        console.log(num)
    }
}
