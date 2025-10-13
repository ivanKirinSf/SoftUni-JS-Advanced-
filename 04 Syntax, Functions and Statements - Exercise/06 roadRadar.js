function roadRadar(a, b){

    let speedRange = {

        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20

    }

    let currentSpeed = Number(a);
    let location = b

    if(currentSpeed > speedRange[location]){

        let diff = currentSpeed - speedRange[location];

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedRange[location]} - ${statusBar(diff)}`);

    }else {

        console.log(`Driving ${currentSpeed} km/h in a ${speedRange[location]} zone`);

    }

    function statusBar(info){

        if( info <= 20 ){
            return "speeding"
        }else if( info <= 40 ){
            return "excessive speeding"
        }

        return "reckless driving"

    }



}
