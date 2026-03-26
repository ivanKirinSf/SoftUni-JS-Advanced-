function townPopulation(input){

  let town = {}

  for(let el of input){

    let temp = el.split(" <-> ");

    let cityName = temp.shift();

    let cityPop = Number(temp.shift());

    if(town.hasOwnProperty(cityName)){

       town[cityName] += cityPop;

    }else{

      town[cityName] = cityPop;

    }    

  }

  for(let key in town){

    console.log(`${key} : ${town[key]}`)
  }

}


townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Sofia <-> 1000000']
)
