function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = ['<table>'];

outputArr.push(makeKeyRow(arr));
arr.forEach((obj) => outputArr.push(makeValuesRow(obj)));

outputArr.push(`</table>`);

function makeKeyRow(arr){

    let keys = Object.keys(arr[0]);

    let header = keys.map( k => `<th>${escapeHtml(k.trim())}</th>`).join("");

    return `   <tr>${header}</tr>`

}

function makeValuesRow(obj){

    let values = Object.values(obj);

    let txt = values.map( v => `<td>${escapeHtml(v)}</td>`).join("");

    return `   <tr>${txt}</tr>`

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
