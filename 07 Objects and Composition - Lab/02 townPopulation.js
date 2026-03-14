function townPop(input){

    let city = {};

    for(let line of input){

        let tokens = line.split("<->");

        let townName = tokens[0];

        let townPopulation = Number(tokens[1]);

        city[townName] = townPopulation


        //console.log(townPopulation)


    }

    console.log(city)

}
