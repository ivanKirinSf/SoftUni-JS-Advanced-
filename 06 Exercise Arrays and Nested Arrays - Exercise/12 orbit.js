function orbit(input){

    let arr = input;

    let width = input[0];

    let height = input[1];

    let xCor = input[2];

    let yCor = input[3];

    let matrix = [];

    for(let i = 0; i < width; i ++){

        let newArr = [];

        index = 0;
        while(index < width){

            newArr.push(false);

            index++

        }

        matrix.push(newArr)
    }


    placeTheStar(matrix, xCor, yCor);

    if(placeTheStar = true){

    surrounding(matrix, xCor, yCor, width)

    printMatrix(matrix)

    }   


    function placeTheStar(arr, x, y){

        if(x >=0 && x < arr[x].length ){

            arr[x][y] = 1; 

            return true;
        }

        return false;

                        

    }

    function surrounding(arr, x, y, num){

        

        let mid = Math.floor(num/2);

        let levels = 0

        if(x < mid){

            levels = (num - 1)-x;

        }else if( x >= mid){

            levels = x;

        }
        
            
            for(let i = 1; i <= levels; i++){ // колко рунда имаме

                

                index = x - i;    

                while( index <= x + i){

                    if(index < 0){
                        index = 0;
                    }

                    if(index < num){

                        let temp = arr[index];

                    
                    index2 = x - i; 
                    if(index2 < 0){
                        index2 = 0;
                    }                  
                    while( index2 <= x + i){

                        if(temp[index2] === false ){
                            temp[index2] = i+1;
                        }

                        index2++
                    }

                    index++

                    }else {
                        break;
                    }                    
                    
                }
            }                       

    }


    function printMatrix(matrix){

        //console.table(matrix)

    //for(let el of matrix){

        //console.table(el.join(" "))
    //}

    for(let row of matrix){

        console.log(row.join(" "))
    }
    }    
}

