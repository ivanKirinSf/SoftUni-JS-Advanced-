function spiralMatrix(x, y){

    let height = Number(x);

    let width = Number(y); 

    let matrix = [];

    let num = 1;

    let last = 0;

    for(let i = 0; i < height; i ++){

        let arr = [];

        index = 0;
        while(index < y){

           arr.push(false);

           index++;

        }

        matrix.push(arr)
    }     

          let size = x*y;

         for(let a = 0; a <= matrix[0].length-1; a++){

            if(matrix[last][a] === false){

            matrix[0][a] = num;

            num++


            }

            matrix[0][a] = num;

            num++

         }

         print(matrix)

    


    function print(matrix){

        for(let row of matrix){

            console.log(row.join(" "))
        }

    }

}
