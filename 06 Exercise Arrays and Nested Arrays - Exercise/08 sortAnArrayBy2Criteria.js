function sortAnArrayBy2Criteria(arr){

    arr.sort((a, b) => {
        if( a.length !== b.length){
            return a - b;
        }else{

          return a.localcompare(b);

        }
    })

    arr.forEach(element => {

        console.log(element)
        
    });

}
