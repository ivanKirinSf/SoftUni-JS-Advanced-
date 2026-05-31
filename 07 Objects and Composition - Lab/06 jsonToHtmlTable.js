function jsonToHtmlTable(json){

let arr = JSON.parse(json);

let outputArr = [`<table>`];

outputArr.push(makeKeyArr(arr));

function makeKeyArr(arr){

    let keys = Object.keys(arr[0]);

    let header = keys.map( k => `<th>${escapeHtml(k.trim())}</th>`).join("")

    console.log(header)
}

function makeValueArr(arr){

    let values = Object.values(arr[1]);

    let str = values.map(v => `<th>${v.trim()}</th>`).join("")

    console.log(value)
}

function escapeHtml(value){
    return 
    String(value)
    .replace(/`<`/g, &lt)
    .replace(/`>`/g, &gt)
    .replace(/`&`/g, &amp)
    .replace(/`&`/g, &quot)
}

} 
