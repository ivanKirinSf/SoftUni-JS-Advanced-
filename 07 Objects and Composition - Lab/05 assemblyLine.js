function createAssemblyLine(){

return{


hasClima(car){

   car.temp = 21;
   car.tempSettings = 21;

   car.adjustTemp = function (){

        if(this.temp < this.tempSettings){
            this.temp += 1;
        }else if(this.temp > this.tempSettings){
            this.temp -= 1;           

        }
   }

},

hasAudio(car){

    car.currentTrack = null;

    if(this.currentTrack !== null){

        car.nowPlaying = function (){

console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`);

        }
    }

}

}

}
