function extract(content){

let text = document.getElementById(content).textContent;

let regText = /\(([^)]+)\)/g;

let res = [];

let match = regText.exec(text);

while(match){

    res.push(match[1]);

    match = regText.exec(text);

}

return res.join('; ')

}
