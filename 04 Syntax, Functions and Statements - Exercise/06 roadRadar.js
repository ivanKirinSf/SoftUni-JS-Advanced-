function roadRadar(a, b){

    let speedLimit = {

        "motorway" : 130,
        "interstate" : 90,
        "city": 50,
        "residential": 20,

    }

    let speed = Number(a);
    let location = b;
    //console.log(b)

    if(speed > speedLimit[location]){

        let diff = speed - speedLimit[location];

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[location]} - ${statusBar(diff)}`)

    }else {

        console.log(`Driving ${speed} km/h in a ${speedLimit[location]} zone`)
    }

    function statusBar (info){

        if(info <= 20){

            return "speeding";

        }else if(info <= 40) {

            return "excessive speeding";

        }

        return "reckless driving";

    }

}

roadRadar(200, 'motorway')
