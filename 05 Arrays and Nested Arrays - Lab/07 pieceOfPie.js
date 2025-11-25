function pieceOfPie(arr, start, end){

    let indexStart = arr.indexOf(start);
    let indexEnd = arr.indexOf(end);

    let section = arr.slice(indexStart, indexEnd+1)

    return section

}

pieceOfPie(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
