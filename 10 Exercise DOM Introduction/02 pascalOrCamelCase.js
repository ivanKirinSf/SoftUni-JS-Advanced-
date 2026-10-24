function solve(){

let textRef = document.getElementById("text").value;

let convRef = document.getElementById("naming-convention").value;

let resultRef = document.getElementById("result");

let arrText = textRef.toLowerCase().split(" ");

let final = [];

//resultRef.textContent = arrText;

//debugger

if(convRef !== "Camel Case" && convRef !== "Pascal Case"){

resultRef.textContent = "Error!";

return;

}

//debugger

for(let i = 0; i < arrText.length; i++){

  let word = arrText[i];

  //debugger;

  if(word){

    if(convRef === "Camel Case" && i === 0){

    let char = word[0].toLowerCase();

    let last = word.slice(1);

    let newStr = char+last;
    
    final.push(newStr); 

    continue;

  }

  let char = word[0].toUpperCase();

  let last = word.slice(1);

  let newStr = char+last;

  final.push(newStr);

  }
  
}

//debugger

resultRef.textContent = final.join("");

}
