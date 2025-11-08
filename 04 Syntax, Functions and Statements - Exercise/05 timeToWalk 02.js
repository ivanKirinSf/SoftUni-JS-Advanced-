function timeToWalk(steps, footprint, speed){

   let lengthInKM = steps*(footprint/1000);

   let speedInMlSec = (speed/3600)*1000;

   //let speedIn

   let timeInMlSec = speedInMlSec*lengthInKM;


   
   console.log(timeInMlSec)

}

timeToWalk( 4000, 0.60, 5 )
