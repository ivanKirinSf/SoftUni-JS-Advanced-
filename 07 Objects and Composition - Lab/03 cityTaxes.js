



const city =
  cityTaxes('Tortuga',
  7000,
  15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);


function cityTaxes(cityName, cityPopulation, cityTreasury){

   let city = {};

    city.name = cityName;
    city.population = Number(cityPopulation);
    city.treasury = Number(cityTreasury);
    let taxrate = 10

    city.collectTaxes = function(){

        this.treasury += population*taxrate;

    }

    city.applyGrowth = function(percentage){


        this.population += this.population * (percentage/100);

    }

    city.applyRecession = function (percentage){

        this.treasury -= this.treasury*(percentage/100);

    }

    console.table(city)

}
