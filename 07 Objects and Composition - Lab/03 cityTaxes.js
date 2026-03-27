
function cityTaxes(cityName, cityPopulation, cityThreasury){

    let city = {};

    city.name = cityName;
    city.population = cityPopulation;
    city.treasury = cityThreasury;
    city.taxRate = 10;

    city.collectTaxes = function(){

        this.treasury += this.population * this.taxRate;

    };

    city.applyGrowth = function(percent){

        this.population += this.population * (percent/100);

    }

    city.applyRecession = function(percentage){

        this.treasury -= this.treasury * percentage/100;

    }

    return city
} 
