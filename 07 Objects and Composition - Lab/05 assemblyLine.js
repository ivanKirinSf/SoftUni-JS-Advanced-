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

car.nowPlaying = function (){

console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`)

}

},

hasParktronic(car){

car.checkDistance = function (dis){

    if(dis < 0.1 ){

        console.log(`Beep! Beep! Beep!`);

    }else if(dis < 0.25){

        console.log(`Beep! Beep!`);

    }else if(dis < 0.5){

        console.log(`Beep!`);
    }
}    

}

}

}
