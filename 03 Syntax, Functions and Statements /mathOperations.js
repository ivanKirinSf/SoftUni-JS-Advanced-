function mathOperations(num1, num2, str){

    let n1 = Number(num1);

    let n2 = Number(num2);

    let res = 0;


    if(str === "+"){

        res = n1 + n2;        
    }else if(str === "-"){
        res = n1 - n2;
    }else if(str === "*"){
        res = n1 * n2;
    }else if(str === "/"){
        res = n1 / n2;
    }else if(str === "%"){
        res = n1 % n2;
    }else if(str === "**"){
        res = n1 ** n2;
    }

    console.log(res)

}

mathOperations(5, 6, '**')
