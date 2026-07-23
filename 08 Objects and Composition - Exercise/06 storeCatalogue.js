function storeCatalogue(info){
    
    let products = {};

    let arr = [];

    for(let el of info){

        let temp = el.split(" : ");

        let name = temp.shift();

        let price = Number(temp.shift());

        products[name] = price;

        arr.push(name);

        //console.log(price);

    }

    let sort = arr.sort((a,b) => a.localeCompare(b));

    let startedInitial = ""

    

    for(let line of sort){

        let char = line[0]

        if(!startedInitial){

            console.log(char);

            startedInitial = char;

        }else if(startedInitial !== char){

            console.log(char);

            startedInitial = char;         

        }
        console.log(`  ${line}: ${products[line]}`)
    }

}

storeCatalogue(
[
"Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
"Rolex : 100000",
"Rollon : 10",
"Rali Car : 2000000",
"Pesho : 0.000001",
"Barrel : 10"
]
)
