function timeToWalk(steps, footprint, speed){

    let distanceInMeters = steps*footprint;

    let distanceInKm = distanceInMeters/1000;

    let breaks = Math.floor((distanceInKm/0.5));

    let breaksInSec = breaks*60;

    let timeInSec = Math.floor((distanceInKm/speed)*60*60);

    //let seconds = Math.floor(time*60) + breaksCounter*60;

    let finalTimeInSec = timeInSec + breaksInSec;

    let hours = Math.floor(finalTimeInSec/3600);

    let minutes = Math.floor((finalTimeInSec%3600)/60);

    let seconds = Math.ceil(finalTimeInSec%60);

    console.log(`${hours}:${minutes}:${seconds}`);
    
}
