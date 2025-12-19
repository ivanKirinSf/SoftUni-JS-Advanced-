function equalNeighbors(arr){

    let counter = 0;

   for(let i = 0; i < arr.length; i++){
    let temp = arr[i];

    for(let k = 0; k < temp.length; k++){

        let elA = temp[k];

        let elC = temp[k+1];

        if(elC){

            if(elA === elC){

            counter ++
        }
        }       
        
        let index = i+1;

        if(index <= arr.length-1){
            let elB = arr[index][k];

        if(elA === elB){

            counter ++

        }
        }   

    }
     
   }

   console.log(counter)

}

equalNeighbors (

[['2', '2', '5', '7', '4'],
 ['4', '0', '5', '3', '4'],
 ['2', '5', '5', '4', '2']]

)
