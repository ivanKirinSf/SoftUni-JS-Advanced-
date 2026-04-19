function createAssemblyLine(){

hasClima(car){

    car.temp = 21;
    car.tempSettings = 21;

    car.adjustTemp = () => {

        if(this.temp < this.tempSettings){
            this.temp += 1; 
        }else if(this.temp > this.tempSettings){
            this.temp -= 1;
        };


    }




}
       

}
