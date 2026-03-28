
function cityTaxes(cityName, cityPopulation, cityTreasury){

    let city = {};

    city.name = cityName;
    city.population = cityPopulation;
    city.treasury = cityTreasury;
    city.taxrate = 10; 

    city.collectTaxes = function(){

        this.treasury += this.population * this.taxrate;

    }

    city.applyGrowth = function(percentage){

        this.population += this.population*( percentage/100 );

    }

    city.applyRecession = function(percentage){

        this.treasury -= this.treasury*( percentage/100 );

    }

    return city   

}
