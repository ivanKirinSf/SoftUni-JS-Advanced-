function timeToWalk(steps, footprints, speed){

   let lengthInM = steps*footprints;

   let speedInM = speed*1000;

   let speedInSec = speedInM / 3600;

   let timeDis = Math.round(lengthInM / speedInSec);

   let timeDisMlSec = timeDis*1000;

   let breaks = Math.floor(lengthInM/500);

   let breaksTime = breaks*60*1000;

   let allTime = timeDisMlSec+breaksTime;

   let res = new Date(allTime);

   let final = res.toISOString();

   let time = final.substr(11, 8)



   console.log(time)


}

timeToWalk(2564, 0.70, 5.5)
