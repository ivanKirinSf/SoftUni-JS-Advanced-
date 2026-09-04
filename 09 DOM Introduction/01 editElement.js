document.referenceById("e1");

console.log(document);

function editElement(text, match, replacer){

    const textReff = text.textContent;
    const match = new RegExp(text, 'g');
    const edited = textReff.replace(match, replacer);
    text.textContent = edited;  

}
