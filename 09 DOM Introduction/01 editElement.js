document.getElementById('e1');

console.log(document)

function editElement(data, match, replacer){

    const reff = data.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = reff.replace(matcher, replacer);
    data.textContent = edited;
    
}
