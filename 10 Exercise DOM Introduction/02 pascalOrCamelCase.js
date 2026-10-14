function solve() {
  
  let textRef = document.getElementById("text").value.split(" ");

  let textCase = document.getElementById("naming-convention").value;

  let resRef = document.getElementById("result");

  let res = "";

  let final = "";

    
  for(let i = 0; i < textRef.length; i++){

     if(textCase === "Camel Case"){

          if(i % 2 !== 0){

            let temp1 = textRef[i];

            let char = temp1.slice(0, 1).toUpperCase();            

            let lastPart = temp1.slice(1);

            res = char + lastPart;

            final += res

            //document.getElementById("result").textContent = char;

            //debugger

          }else{
           
            let temp2 = textRef[i];

            final += temp2;
          }  

     }else if(textCase === "Pascal Case"){

          let temp3 = textRef[i].toLowerCase();

          let char = temp3.slice(0,1).toUpperCase();

          let lastPart = temp3.slice(1);

          res = char + lastPart;

          final += res;          

     }else{

      final = "Error!";       

     }

  }    

  document.getElementById("result").textContent = final  

}
