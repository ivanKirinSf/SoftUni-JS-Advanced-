function jsonToHtmlTable(json) { 
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        let header = keys.map(k => `<th>${escapeHtml(k.trim())}</th>`).join("");
        return `   <tr>${header}</tr>`;
    }

    function makeValueRow(obj){ 
        let values = Object.values(obj);
        let row = values.map(v => `<td>${escapeHtml(v)}</td>`).join("");
        return `   <tr>${row}</tr>`;
    }
