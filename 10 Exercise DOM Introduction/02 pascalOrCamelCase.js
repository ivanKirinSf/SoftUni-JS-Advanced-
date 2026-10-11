function solve() {
  
  let textRef = document.getElementById("text").value;

  let textCase = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  if(textCase === "Camel Case"){

    let splittedText = textRef.split(" ");
    let word = ""

    for(let i = 1; i < splittedText.length; i+=2 ){

      word = splittedText[i];

      let char = word[0];

      let code = char.charCodeAt(0);

      if(code >= 97 || code <= 122 ){


        let upText = char.toUpperCase();

        upText;

        let sliced = word.substring(0, 1);

        let replaced = word.replace(char, upText)

      }

      debugger;

    }

    document.getElementById("result").textContent = word;


  }else{

    document.getElementById("result").textContent = "Error!"

  }


}
