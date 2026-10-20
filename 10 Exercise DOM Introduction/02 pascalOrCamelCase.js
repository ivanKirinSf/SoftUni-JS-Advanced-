function solve(){

    let textRef = document.getElementById("text").value;
    let convRef = document.getElementById("naming-convention").value;
    let resultRef = document.getElementById("result");
    let fin = []

    let arrText = textRef.toLowerCase().split(" ");

    if( convRef !== "Camel Case" && convRef !== "Pascal Case" ){

     fin.push("Error!");

     resultRef.textContent = fin.join("");

     return;

    }

    //resultRef.textContent = arrText;

    for(let i = 0; i < arrText.length; i++){

      let temp = arrText[i];

      if(convRef === "Camel Case" && i == 0){

        fin.push(temp);

        continue;

      }

      if(temp){

         let char = temp[0].toUpperCase();

         let lastPart = temp.slice(1);

         let word = char + lastPart;

         fin.push(word);

         //debugger

         //resultRef.textContent = word;

      }

      resultRef.textContent = fin.join("");

    }
}
