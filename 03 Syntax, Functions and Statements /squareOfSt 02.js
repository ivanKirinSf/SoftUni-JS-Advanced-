function sqOfStars(n){

    let str = "";

    for(let i = 0; i < n; i++){

        str += " *";
    }

    //console.log(str)

    index = 0;
    while(index < n){
        console.log(str);

        index++
    }

}

sqOfStars(7)
