function solve() {
  
  let textRef = document.getElementById("text").value.split(" ");

  let textCase = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  if(textCase !== "Camel Case" || textCase !== "Pascal Case"){

  document.getElementById("result").textContent = "Error!"

  }

  for(let i = 0; i < textRef.length; i++){

     if(textCase === "Camel Case"){

          if(i % 2 === 0){

            let temp1 = textRef[i];

            let char = temp1.slice(0, 1).toUpperCase();

            document.getElementById("result").textContent = char;

          }  

     }



  }

  

  //document.getElementById("result").textContent = textRef

}
