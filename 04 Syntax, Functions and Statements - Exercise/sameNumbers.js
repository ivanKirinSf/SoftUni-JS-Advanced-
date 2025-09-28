function sameNumbers(input){

    let str = input.toString();

    let same = true;

    let sum = 0; 

    for(let i = 0; i<str.length; i++){

        let numA = str[i];

        let numB = str[i+1];

        if(numA !== numB && i+1 < str.length){

           same = false;

           break;

        }
    }

    for(let j = 0; j < str.length; j++){

        let num = Number(str[j]);

        sum += num;

    }

    console.log(same)
    console.log(sum)

}

sameNumbers(2222222)
