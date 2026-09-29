function extract(content) {

let text = document.getElementById(elementId).textContent;

let regText = /\(([^)]+)\)/g;

let res = [];

let match = regText.match(text);

while(match){

    res.push(match[1]);

    match = regText.match(text);
}

return res.join('; ')

}
