function solve(){

  let textRef = document.getElementById("text").value;

  let textConvRef = document.getElementById("naming-convention").value;

  let arrText = textRef.toLowerCase().split(" ");

  let word = "";

  let res = document.getElementById("result")

  let final = [];

  if(textConvRef !== "Camel Case" && textConvRef !== "Pascal Case"){

       res.textContent = "Error!";

       return

  }

  for(let i = 0; i < arrText.length; i++){

    let temp = arrText[i];

    if( textConvRef === "Camel Case"){

      if(i === 0){

        final.push(temp);

        continue;

      }

      let char = temp[0];

      let lastPart = temp.slice(1);

      word = char.toUpperCase() + lastPart;

      final.push(word);   
      
      //debugger

    } else if(textConvRef === "Pascal Case"){

      let char = temp[0];

      let lastPart = temp.slice(1);

      word = char.toUpperCase() + lastPart;

      final.push(word);           

    }

  }

  res.textContent = final.join("");

  //debugger

}
