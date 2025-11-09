function timeToWalk(steps, footprint, speed){

    let distanceInM = steps*footprint;

    let speedInMperSec = (speed*1000)/3600;

    let stops = Math.floor(distanceInM/500)*60;

    let timeInMSec = (Math.round(distanceInM/speedInMperSec+stops)*1000);

    let time = new Date(timeInMSec)//.slice(10, 18);

    let str = time.toISOString()

    let sliced = str.slice(11, 19)

    console.log(sliced)

}

timeToWalk( 4000, 0.60, 5 )
