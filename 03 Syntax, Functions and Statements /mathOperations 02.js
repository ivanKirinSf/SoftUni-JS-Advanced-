function mathOperations(n1, n2, str){

    let opertator = str;

    let res = 0;

    switch (opertator){

        case "+" : res = n1 + n2;
        break;

        case "-" : res = n1 - n2;
        break;

        case "*" : res = n1 * n2;
        break;

        case "/" : res = n1 / n2;
        break;

        case "%" : res = n1 % n2;
        break;

        case "**" : res = n1 ** n2;
        break;
    }

    console.log(res)

}

mathOperations(5, 6, '+')
