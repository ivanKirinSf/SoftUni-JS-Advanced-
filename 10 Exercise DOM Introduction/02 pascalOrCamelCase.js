function solve() {
  
  let textRef = document.getElementById("text").value;

  let textCase = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  if(textCase === "Camel Case"){

    let splittedText = textRef.split(" ");
    let word = "";
    let newStr = [];

    for(let i = 1; i < splittedText.length; i+=2 ){

      word = splittedText[i];

      let char = word[0].toUpperCase();

      let sliced = word.slice(1);

      word = char + sliced;
      
      splittedText.splice(i, word);

      //let code = char.charCodeAt(0);

      //if(code >= 97 || code <= 122 ){

        //let charUp = char.toUpperCase()

        //let upText = char.toUpperCase();

        

        //let sliced = word.slice(0);

        //let replaced = charUp + word;

        //console.log(replaced)

      //}

      //debugger;

    }    

    document.getElementById("result").textContent = splittedText.join("");


  }else{

    document.getElementById("result").textContent = "Error!"

  }


}
