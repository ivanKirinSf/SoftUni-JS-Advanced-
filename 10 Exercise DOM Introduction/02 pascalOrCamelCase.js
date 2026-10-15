function solve(){

  let textRef = document.getElementById("text").value;

  let textConvRef = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");
  
  if(textConvRef !== "Camel Case" || textConvRef !== "Pascal Case"){

    resRef.textContent = "Error!";

    //debugger

    //return

  }

  let textArr = textRef.toLowerCase().split(" ");

  for(let i = 0; i< textArr.length; i++){

    

  }



  debugger


}
