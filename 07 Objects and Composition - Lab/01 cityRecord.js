function cityRecord(name, population, treasury){

  let city = {};

  city.name = name;

  city.population = Number(population);

  city.treasury = Number(treasury);

  return city

}

console.log(cityRecord('Tortuga',
7000,
15000
))

