function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = ["<table>"];

outputArr.push(makeKeyRow(arr));

outputArr.push(makeValueRow(arr));

function makeKeyRow(arr){

let keys = Object.keys(arr[0]);

let header = keys.map(k => `<th>${k.trim()}</th>`).join("");

return `<tr>${header}</tr>`

}

function makeValueRow(arr){

let values = Object.values(arr[1]);

let txt = values.map(j => `<td>${j}</td>`).join("");

return `<tr>${txt}</tr>`

}

outputArr.push(`</table>`);

console.log(outputArr.join(`\n`))

} 
