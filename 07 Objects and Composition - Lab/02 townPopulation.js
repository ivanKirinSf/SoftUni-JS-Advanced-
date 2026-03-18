function townPop(input){

    let city = {}

  for(let el of input){

    let tokens = el.split(" <-> ");

    let townName = tokens.shift();

    let townPopulation = Number(tokens.shift());

    if(city.hasOwnProperty(townName)){

        city[townName] += townPopulation; 
        
    }else {

     city[townName]= townPopulation;

    }     

    //console.log(population)
  }

  let entries = Object.entries(city)

  //console.table(entries)

  for(let el of entries){

       let key = el[0];

       let value = el[1];

       console.log(`${key} : ${value}`);

  }

}
