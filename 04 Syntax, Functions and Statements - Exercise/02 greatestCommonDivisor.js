function greatestCommonDivisor(num1, num2){

    let num = 0;

    if(num1 > num2){
        num = num1;
    }else {
        num = num2
    }

    let arr = [];

    for(let i = 0; i < num+1; i++){

        if(num1 % i== 0 && num2 % i== 0){

            arr.push(i)

        }
    }

    let max = Math.max(arr);

    console.log(max)

}

greatestCommonDivisor(15, 5)
