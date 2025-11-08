function timeToWalk(steps, footprint, speed){

    let time = new Date ()

   let footprintKM = footprint/1000;

   let lengthInKM = steps*footprintKM;

   let restNum = Math.floor(lengthInKM/0.5);

   //console.log(restNum)

   

   //let speedIn

   let timeInSec = ((lengthInKM/speed)*3600)+4*60;

   if(timeInSec / 3600 < 1){

    time.setHours(00)

   }else{

    let hoursNum = timeInSec / 3600;

    time.setHours(hoursNum)

   }

   let min = Math.floor(timeInSec/60);

   time.setMinutes(min);

   //console.log(min)

   let sec = timeInSec; 
   
   console.log(sec)

   //time.setSeconds(sec);


   
   console.log(time)

}

timeToWalk( 4000, 0.60, 5 )
