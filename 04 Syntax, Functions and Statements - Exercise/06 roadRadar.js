function roadRadar(a, b){

    let speedLimit = {

        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20,

    }

    

    let currentSpeed = Number(a);
    let area = b;

    
    if (currentSpeed > speedLimit[area]){

        let diff = currentSpeed - speedLimit[area];

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${calculatesStatus(diff)}`);

    }else{

        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit[area]} zone`);

    }


    function calculatesStatus(speedDiff){

        if(speedDiff <= 20){
            return "speeding"
        }else if(speedDiff <= 40){
            return "excessive speeding"
        }

        return "reckless driving"

    }

}
