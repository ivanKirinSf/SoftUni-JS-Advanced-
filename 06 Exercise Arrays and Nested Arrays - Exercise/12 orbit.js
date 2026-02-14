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


    placeTheStar(matrix, xCor, yCor)

    surrounding(matrix, xCor, yCor, width)

    printMatrix(matrix)


    function placeTheStar(arr, x, y){

        arr[x][y] = 1;                

    }

    function surrounding(arr, x, y, num){

        

        let levels = (num - 1)-x;
            
            for(let i = 1; i <= levels; i++){ // колко рунда имаме

                

                index = x - i;
                if(index < 0){
                    index = 0
                }
                while( index <= x + i){

                    let temp = arr[index];

                    index2 = x - i;
                    if(index2 < 0){
                    index2 = 0
                }
                    while( index2 <= x + i){

                        if(temp[index2] !== undefined && temp[index2] !== 1){
                            temp[index2] = i+1;
                        }

                        index2++
                    }

                    index++
                    
                }
            }                       

    }


    function printMatrix(matrix){

        console.table(matrix)

    //for(let el of matrix){

        //console.table(el.join(" "))
    //}

    }
    
}

