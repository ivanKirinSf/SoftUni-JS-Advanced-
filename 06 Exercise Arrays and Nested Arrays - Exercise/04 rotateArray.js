function rotateArray(arr, num){

    
let res = arr;
    

    for(let i = 0; i < num; i++){

            let char = arr.pop();

            insertStart(char, arr);

            function insertStart(el, arr){

                arr.unshift(el)
            }

            //arr.unshift(el)

            //arr.push(el)

            //console.log(el)
            //console.log(arr)
        } 

        console.log(arr.join(" "))


}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)
