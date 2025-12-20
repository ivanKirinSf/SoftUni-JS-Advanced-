function arrayDelimiter(arr, dilimiter){

    let str = "";

    let i = 0;

     for(let el of arr){
        
        str += el;

        if( i < arr.length-1 ){

            str += dilimiter                                   

        }

        i++
     }  

     console.log(str)

}

arrayDelimiter(
['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
)
