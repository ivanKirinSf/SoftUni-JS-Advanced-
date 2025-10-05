function timeToWalk(steps, footprint, speed){

    let distanceInMeters = steps*footprint;

    let distanceInKm = distanceInMeters/1000;

    let time = distanceInKm/speed;

    let res = Math.floor(time*60);
    
    console.log(res)

}
