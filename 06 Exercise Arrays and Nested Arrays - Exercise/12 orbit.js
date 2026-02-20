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

        if(x >=0 && x < arr[x].length && y >=0 && y < arr[y].length ){

            arr[x][y] = 1; 

            return true;
        }

        return false;

                        

    }

    function surrounding(arr, x, y, num){

        

        let mid = Math.floor(num/2);

        let levels = 0

        if(y < mid){

            levels = (num - 1)-y;

        }else if( y >= mid){

            levels = y;

        }
        
            
            for(let i = 1; i <= levels; i++){ // колко рунда имаме

                index = x-i;
                while(index <= x+i){
                    let temp = arr[index]

                    index2 = y-1;
                    while(index2 <= y+1){

                        if(temp[index2] === false){

                            temp[index2] = 1 + i;
                        }

                        index2++
                    } 

                    index++
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

