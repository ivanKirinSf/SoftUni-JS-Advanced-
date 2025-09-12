function max(a, b, c){

    if( a > b && a > c){

        console.log(`The largest number is ${a}`);
    }else if(b > a && b > c){

        console.log(`The largest number is ${b}`);
    } else {

        console.log(`The largest number is ${c}`);
    }

}

max(3, 4, 5);
max(7, 11, 2);
