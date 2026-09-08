document.getElementById();

console.log(document)


function extractText(){

    const items = Array.from(document.getElementsByTagName('li'));
    const text = items.map(e => e.textContent);
    const output = document.getElementById('result');
    output.value = text

}
