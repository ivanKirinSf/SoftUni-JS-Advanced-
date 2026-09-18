document.getElementById('result');

console.log(document);

function extractText(){

let arr = Array.from(document.getElementsByTagName('id'));

let text = arr.map(e => e.textContent);

let output = document.getElementsById();

output.value = text;

}
