function orbit(input){

    let arr = input;

    let width = input[0];

    let height = input[1];

    let xCor = input[2];

    let yCor = input[3];

    let matrix = [];

    let isPlaced = true;

    for(let i = 0; i < height; i ++){

        let newArr = [];

        index = 0;
        while(index < width){

            newArr.push(false);

            index++

        }

        matrix.push(newArr)
    }


    placeTheStar(matrix, xCor, yCor, height, width);

    if(placeTheStar = true){

    surrounding(matrix, xCor, yCor, height, width)

    printMatrix(matrix)

    }   


    function placeTheStar(arr, x, y, h, w){

       arr[x][y] = 1;     
       
       isPlaced = true;

    }

    function surrounding(arr, x, y, h, w){

        let levels = 0

        if(h > w){

            levels = h;

        }else {

            levels = w
        }
                    
            for(let i = 1; i <= levels; i++){ // колко рунда имаме

                index = x-i;
                if(index < 0){

                    index = 0;

                }
                while(index <= x+i){

                    if(index >= h){
                        break;
                    }

                    let temp = arr[index]

                    index2 = y-i;
                    while(index2 <= y+i){ // takes a row and takes each of the elements in it.

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
