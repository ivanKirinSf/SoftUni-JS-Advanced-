function equalNeighbors(arr){

    let counter = 0;

   for(let i = 0; i < arr.length; i++){
    let temp = arr[i];

    for(let k = 0; k < temp.length; k++){

        let elA = temp[k];

        if( i === arr.length-1){
            break;
        }

        let elB = arr[i+1][k];

        if(elA === elB){

            counter ++

        }        
        
    }
     
   }

   console.log(counter)

}

equalNeighbors (
    
[['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]

)
