function town(arr){

    let city = {};

    for(let str of arr){

        let [name, population] = str.split(" <->");

        population = Number(population)

        if(city[name] !== undefined){

            population += city[name];
        }

        city[name] = population;
    }

    for(let town in city){

        console.log(`${town} <-> ${city[town]}`)
    }

}
