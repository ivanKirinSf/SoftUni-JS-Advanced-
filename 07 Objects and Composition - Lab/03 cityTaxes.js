const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


function cityTaxes( cityName, cityPopulation, cityTreasury ){

    let city = {};

    city.name = cityName;
    city.population = cityPopulation;
    city.treasury = cityTreasury;
    city.taxRate = 10;



    city.collectTaxes = function (){

        city.treasury += Math.floor(city.population * city.taxRate) ;

        //console.log(city.treasury)

    }

    city.applyGrowth = function (percentage){

        city.population += Math.floor(city.population*(percentage/100));

    }

    city.applyRecession = function(percentage){

        city.treasury -= Math.floor(city.treasury * (percentage/100));

    }

    return city;

}
