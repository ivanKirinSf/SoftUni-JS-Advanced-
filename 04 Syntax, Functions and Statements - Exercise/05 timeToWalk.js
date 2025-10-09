function getTimeToUniversity(steps, footprintLength, speedKmH) {

    let distMeters = steps*footprintLength;

    let speedInMperSec = (speedKmH*1000)/3600;

    let breaks = (Math.floor(distMeters/500))*60;

    //console.log(breaks)

    let timeMSec = new Date (Math.round(distMeters/speedInMperSec + breaks)*1000);

    let finalTime = timeMSec.toISOString();

    let time = finalTime.substring(11, 19);

    //console.log(finalTime)

    console.log(time)

}
