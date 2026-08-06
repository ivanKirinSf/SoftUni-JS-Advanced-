function janNotation(data){

    let arr = data;

    let result = 0;

    for(let i = 0; i < arr.length; i++){

       let res = typeof arr[i];

       if(res === "string"){

        operator = arr[i];

        let num1 = Number(arr[i-1]);
        
        let num2 = Number(arr[i-2]);

        if(operator === "+"){

            result = num1 + num2;

            arr.splice(i-2,3);
            //console.log(arr)
            arr.splice(i-2,1, result)
        }


       }
       
       //console.log(res)

    }

    console.log(arr)   

}
