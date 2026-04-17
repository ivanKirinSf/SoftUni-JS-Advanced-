function createAssemblyLine(){

    return{

        hasClima(car){
            car.temp = 21;
            car.tempSettings = 21;

            car.adjustTemp = function (){
                if(this.temp < tempSettings){

                    this.temp += 1;
                    
                }else if(this.temp > tempSettings){

                    this.temp -= 1;
                }

            }
        }

        hasAudio(car){

            this.name = myCar.currentTrack.name;
            this.artist = myCar.currentTrack.artist;
            this.nowPlaying = function (){

                console.log(`Now playing ${currentTrack.name} by ${currentTrack.artist}`);

            }

        }
    }

}
