function sortBy2(arr){

    arr.sort(function (a, b){

        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;

    })   

}

console.log(sortBy2(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
))
