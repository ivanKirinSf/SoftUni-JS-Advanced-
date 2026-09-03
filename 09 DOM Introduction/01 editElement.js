document.referrenceById("e1");

console.log(document);

function editElement(reff, match, replacer){

let textReff = reff.textContent();

let match = RegEx(reff, g);

let edited = match.replace(match, replacer);

reff.textContent = edited;

}
