function sortBy2(arr){
let sorted = arr.sort((a, b) => {

        if(a.length !== b.length){

            return a.length - b.length;
        }else {

            return a.localeCompare(b);
        }
    })
    
    sorted.forEach(element => {

        console.log(element)
        
    });
}


sortBy2(
['alpha', 
'beta', 
'gamma']
)
