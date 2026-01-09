function magicMatrices(data){

    //let isMagic = true

   for(let i = 0; i < data.length-1; i++){
        
        let sumRowOne = 0;
        let sumRowTwo = 0;
        let sumColumnOne = 0;
        let sumColumnTwo = 0;           
        
        data[i].forEach(el => sumRowOne += el);
        data[i+1].forEach(el => sumRowOne += el);
        data.forEach(row => sumColumnOne += row[i]);
        data.forEach(row => sumColumnTwo += row[i+1]);

        if(sumRowOne !== sumRowTwo || sumColumnOne !== sumColumnTwo){

            return false;

        }else{

             return true;

        }

    }   
    
}

console.log(magicMatrices(
[[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]
))
