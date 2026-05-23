function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = ["<table>"];

outputArr.push(makeKeyRow(arr));

function makeKeyRow(arr){

    let keys = Object.keys(arr[0]);

    let header = keys.map( k => `<th>${k.trim()}</th>`).join("");

    return header;
}

console.log(outputArr)

} 
