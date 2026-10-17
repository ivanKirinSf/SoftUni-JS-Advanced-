function solve(){

  let textRef = document.getElementById("text").value;

  let textConvRef = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  let word = "";

  let finText = []
  
  if(textConvRef !== "Camel Case" && textConvRef !== "Pascal Case"){

    finText.push("Error!")

    //resRef.textContent = "Error!";

    //debugger

    //return

  }

  let textArr = textRef.toLowerCase().split(" ");

  for(let i = 0; i< textArr.length; i++){

    if(textConvRef === "Camel Case"){

      if(i % 2 !== 0 && i !== 0){

        let str = textArr[i];
        let char = str[0].toUpperCase();
        let lastPart = textArr[i].slice(1);

        word = char + lastPart;

        finText.push(word);         

      }else{

        finText.push(textArr[i]);

      }

      

      //debugger

    }else if(textConvRef === "Pascal Case"){

      let str = textArr[i];

      let char = str[0].toUpperCase();
      let lastPart = str.slice(1);

      word = char + lastPart;

      finText.push(word);       

    }

    resRef.textContent = finText.join("");
    
  } 

  //debugger
}
