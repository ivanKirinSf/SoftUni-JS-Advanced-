function stringLength(str1, str2, str3){

    let str1L = str1.length;

    let str2L = str2.length;

    let str3L = str3.length;

    let sum = str1L+str2L+str3L;

    let average = Math.floor(sum/3);

    console.log(sum);

    console.log(average)

}

stringLength('pasta', '5', '22.3')
