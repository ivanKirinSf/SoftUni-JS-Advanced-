function largestNumber(n1, n2, n3){

    if(n1 > n2 && n1 > n3){

        console.log(`The largest number is ${n1}.`);

    }else if(n2 > n1 && n2 > n3){

        console.log(`The largest number is ${n2}.`);

    }else if(n3 > n1 && n3 > n2){

        console.log(`The largest number is ${n3}.`);

    }

}

largestNumber(5, 37, 80)
