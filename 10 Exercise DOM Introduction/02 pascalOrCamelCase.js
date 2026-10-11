function solve() {
  
  let textRef = document.getElementById("text").value;

  let textCase = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  if(textCase === "Camel Case" || textCase === "Pascal Case" || ){

    resRef.textContent = "OK"

  }

  return resRef


}
