function biggestElement(arr){

    let biggest = 0;

    let newArr = [];

   for(let el of arr){

       let sorted = el.sort((a, b) => a-b);

       let bigEl = sorted.pop();

       newArr.push(bigEl);      

   }

   let sortedNew = newArr.sort((a, b)=> a-b);

   biggest = sortedNew.pop();

   return biggest

}

biggestElement(
 [[3, 5, 7, 12],
 [-1, 4, 33, 2],
 [8, 3, 0, 4]]
)
