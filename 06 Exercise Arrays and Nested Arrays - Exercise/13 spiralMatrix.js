
function spiralMatrix(x, y){

    let height = Number(x);

    let width = Number(y); 


    let matrix = [];

    let round = 0;

   

    

    
    let lastIndex = 0;

    for(let i = 0; i < height; i ++){

        let arr = [];

        index = 0;
        while(index < width){

           arr.push(false);

           index++;

        }

        matrix.push(arr)
    }     
    
    
    let size = x*y;

         
         i = 1;
        while(i <= size){

            let row = round;
            let col = round;

            lastIndex = col;

           for(let a = col; a < matrix[row].length; a++){ // horizontalRight direction

            let tempA = matrix[row][a];

            if(tempA === false){

                matrix[row][a] = i;

                i++
                
                lastIndex = a
            }
             
           }

           col = lastIndex

           for(let b = row; b < matrix.length; b++){  // verticalDown direction 

                let tempB = matrix[b][col];

                if(tempB === false){

                    matrix[b][col] = i;

                     i++

                    lastIndex = b
                }

           }

           row = lastIndex;

           for(let c = col; c >= 0; c--){ // horizontaLeft direction

            

            let tempC = matrix[row][c];

            if(tempC === false){

                matrix[row][c] = i;

                 i++

                lastIndex = c;
            }

           }

           col = lastIndex;

           for(let d = row; d >= 0; d--){ // verticalUp direction

            let tempD = matrix[d][col];

            if(tempD === false){

                matrix[d][col] = i;

                 i++

                 lastIndex = d;
            }

           }

           round ++;        


        }


         print(matrix)    


         

    function print(matrix){

        for(let row of matrix){

            console.log(row.join(" "))
        }
    }

    }



 spiralMatrix(8, 8)
