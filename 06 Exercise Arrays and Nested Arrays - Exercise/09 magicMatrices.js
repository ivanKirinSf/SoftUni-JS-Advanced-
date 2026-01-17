function magicMat(arr){

    let rowOne = 0;
    let rowTwo = 0;
    let colOne = 0;
    let colTwo = 0;

    

   for(let i = 0; i < arr.length; i++){

       arr[i].forEach(el => rowOne += el);
       arr[i+1].forEach(el => rowTwo += el);
       arr.forEach(row=> colOne += row[i]);
       arr.forEach(row=> colTwo += (row[i]));

       if(rowOne !== rowTwo || colOne !== colTwo){

       return false;

   }else{

       return true

   }   

   }        
    } 

