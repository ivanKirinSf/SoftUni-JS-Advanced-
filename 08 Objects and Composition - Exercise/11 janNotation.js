function janNotation(data){

let arr = [];

let operators = {

"+": (a,b) => a+b,
"-": (a,b) => a-b,
"*": (a,b) => a*b,
"/": (a,b) => a/b,  

}

for(let el of data){

  let type = typeof el;

if(type === 'number'){

  if(arr.length < 2){
    
    arr.push(el);

  }else{

    console.log("Error: not enough operands!");
    return

  }  

}else{

 let num1 = arr.pop();
  let num2 = arr.pop();
  let res = operators[el](num1,num2);
  arr.push(res);



}

}

if(arr.length === 1){

  console.log(arr[0]);

}else{

  console.log("Error: too many operands!");

}

}
