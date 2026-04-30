function jsonToHtmlTable(json){

let arr = JSON.parse(json);
let outputArr = ['<table>'];

outputArr.push(makeKeyRow(arr))



function makeKeyRow(arr){

    let keys = Object.entries(arr[0]);
    console.table(keys);

}

}
