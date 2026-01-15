function magicMat(arr){

    let sumRow1 = 0;
    let sumRow2 = 0;

    let sumCol1 = 0;
    let sumCol2 = 0;

    let isMagic = true;

    for(let i = 0; i< arr.length; i++){

        let temp = arr[i];

        if( i < arr.length-1 ){

        

        for(let el of temp){

            sumRow1 += Number(el)
        }

        

            let tempB = arr[i+1];

            for(let el of tempB){

                sumRow2 += Number(el);
            }
        

        if(sumRow1 !== sumRow2){

            isMagic = false;

            sumRow1 = 0;
            sumRow2 = 0;

            break;
        }
    }

        sumRow1 = 0;
        sumRow2 = 0;
        //let sumRow1 =  
    }

    if(isMagic === false){

        console.log( false );

    }




}

magicMat([
[4, 5, 6],
 [6, 5, 4],
 [5, 5, 7]
]
)
