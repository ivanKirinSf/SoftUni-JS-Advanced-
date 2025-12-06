let myArr = [30, 50, 40, 10, 70];

let average = myArr.reduce(( total , element , index , arr) => {
    total += element;
    if(index === arr.length-1){
        return total/arr.length;
    }else{
        return total
    }
} )

console.log(average)
