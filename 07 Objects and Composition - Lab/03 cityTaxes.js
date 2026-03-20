function cityTaxes(name, population, treasury){

let town = {};

town.name = name;
town.population = Number(population);
town.treasury = Number(treasury);
town.taxRate = 10;
town.collectTaxes = function (){
    town.treasury += town.population * town.taxRate
};
town.applyGrowth = applyGrowth();
town.applyRecession = applyRecession()




}


const city = cityTaxes('Tortuga',  7000,  15000);
console.table(city);
