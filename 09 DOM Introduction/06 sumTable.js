function sumTable(){

let arr = document.querySelectorAll('table tr');

let total = 0;

for(let i = 1; i < arr.length; i++){

    let col = arr[i].children;
    let cost = col[col.length -1].textContent;

    total += Number(cost);
}

document.getElementById('sum').textContent = total;

}
