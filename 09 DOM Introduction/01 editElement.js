document.getElementById('e1');

console.log(document)

function editElement(context, match, replacer){

    const reffText = context.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = reffText.replace(match, replacer);
    context.textContent = edited;




}
