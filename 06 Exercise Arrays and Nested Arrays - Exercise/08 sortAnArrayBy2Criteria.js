function sortAnArrayBy2Criteria(arr){

arr.sort((a, b) => {

    if(a.length !== b.length){

        return a.length - b.length;

    }else {

        return a.localeCompare(b);

    }

})

arr.forEach( element => console.log(element));

}

sortAnArrayBy2Criteria([
'Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'
])
