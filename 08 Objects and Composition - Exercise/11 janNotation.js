function janNotation(data){

  let arr = [];
  let operator = "false";
  
  let result = 0;


obj = {

  "+": (a,b) => a+b,
  "-": (a,b) => a-b,
  "*": (a,b) => a*b,
  "/": (a,b) => a*b,

}

let index = 0;
  while(data.length > 0){ 
    
    let el = data[index];

    if(Number(el)){

      arr.push(el);
      data.splice(index, 1)
    }
           
      //let a = Number(data[index-1]);      
      //let b = Number(data[index-2]);
      //arr.push(a);
      //arr.push(b);
      //data.splice(index-1, 1);
      //data.splice(index-2, 1);

    
    if(el === "+" || el === "-" || el === "*" || el === "/"){

      operator = el;
      data.splice(index, 1);    
      

      if(a, b){

    result = obj[operator](a,b);
    arr.push(result);

     }

    }

    index ++

  }  
  
  console.log(result)
  console.log(data)
  console.log(arr)

   

}
