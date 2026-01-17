function magicMat(arr){

    let rowOne = 0;
    let rowTwo = 0;
    let colOne = 0;
    let colTwo = 0;

    let isMagic = true

    


    for(let i = 0; i < arr.length-1; i++){

        for(let el of arr[i]){

            rowOne += Number(el)

        }
        
        for(let el of arr[i+1]){

            rowTwo += Number(el)

        }

        

            for(let k = 0; k < arr.length; k++){

               colOne += Number(arr[i][k])  

            }

            for(let j = 0; j < arr.length; j++){

                colTwo += Number(arr[i+1][j])
            }

            
        } 

        if(rowOne !== rowTwo || colOne !== colTwo){

            isMagic = false

        }

        colOne = 0;
        colTwo = 0;
        rowOne = 0;
        rowTwo = 0;

        console.log(isMagic);

    } 
