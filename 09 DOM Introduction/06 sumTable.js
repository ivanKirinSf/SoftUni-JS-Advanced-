function sumTable() {

   let arr = document.querySelectorAll('table tr');

   let total = 0;

   for(let i = 1; i < arr.length; i++){

    let row = arr[i];

    let cost = row[row.length-1].textContent;

    total += cost;

   }

}
