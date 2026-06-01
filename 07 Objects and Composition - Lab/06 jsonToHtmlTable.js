function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = ["<table>"];

outputArr.push(makeKeyRow(arr));
arr.forEach((obj) => {outputArr.push(makeValueRow(obj))});

function makeKeyRow(arr){

    let keys = Object.keys(arr[0]);

    let header = keys.map(k => `<th>${escapeHtml(k.trim())}</th>`);

    return `<tr>${header}</tr>`;

}

function makeValueRow(obj){

    let values = Object.values(obj);

    let str = values.map(v => `<td>${escapeHtml(v)}</td>`);

    return `<tr>${str}</tr>`;

}

function escapeHtml(value){

    return String(value)
    .repeat(/</g, `&lt`)
    .repeat(/>/g, `&gt`)
    .repeat(/&/g, `&amp`)
    .repeat(/"/g, `&quot`)

}

console.log(outputArr).join(`/n`)


} 
