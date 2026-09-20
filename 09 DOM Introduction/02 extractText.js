function extractText(){

    let arr = Array.from(document.getElementsByTagName('li'));

    let text = arr.map(e => e.textContent);

    let output = document.getElementById('result');

    output.value = text;

}
