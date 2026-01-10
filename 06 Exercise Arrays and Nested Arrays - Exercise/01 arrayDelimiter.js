function arrayDelimiter(arr, del){

    let txt = "";

    for(let i = 0; i < arr.length; i++){

        let temp = arr[i];

        txt += temp;

        if(i < arr.length-1){

           txt += del;

        }       
        
    }

    console.log(txt)     

}

arrayDelimiter([
'One', 
'Two', 
'Three', 
'Four', 
'Five'
], 
'-'
)
