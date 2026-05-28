function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = [`<table>`];

outputArr.push(makeKeyRow(arr));
arr.forEach( obj => makeValueRow(arr));

outputArr.push([`</table>`]);

function makeKeyRow(arr){

    let keys = Object.keys(arr[0]);
    let header = keys.map( k => outputArr.push(`<th>${escapeHtml(k.trim())}</th>`)).join("");
    return `<tr>${header}</tr>`
}

function makeValueRow(arr){

let values = Object.values(arr[1]);

let row = values.map(v => outputArr.push(`<td>${escapeHtml(v)}</td>`)).join("");

return `<tr>${row}</tr>`;

}

function escapeHtml(value){

    return String(value)
    .replace(/</g, `&lt`)
    .replace(/>/g, `&gt`)
    .replace(/&/g, `&amp`)
    .replace(/"/g, `&quot`)

}

console.log(outputArr.join(`\n`))

} 
