function janNotation(data){

let arr = data;
let numA = 0;
let numB = 0;
let res = 0;
let isValid = false;

while(arr.length > 1){

  i=0;

  for(let i = 0; i < arr.length; i++){

    let temp = arr[i];

    if(temp === "+"){

      numA = Number(arr[i-2]);
      numB = Number(arr[i-1]);

      res = numA + numB;

      if(res){

        arr.splice(i-2,3);
        arr.splice(i-2,0,res);

      }
    }else if(temp === "-"){

      numA = Number(arr[i-2]);
      numB = Number(arr[i-1]);

      res = numA - numB;

      if(res){

        arr.splice(i-2,3);
        arr.splice(i-2,0,res);

      }

    }else if(temp === "*"){

      numA = Number(arr[i-2]);
      numB = Number(arr[i-1]);

      res = numA * numB;

      if(res){

        arr.splice(i-2,3);
        arr.splice(i-2,0,res);

      }

    }else if(temp === "/"){

      numA = Number(arr[i-2]);
      numB = Number(arr[i-1]);

      res = numA / numB;

      if(res){

        arr.splice(i-2,3);
        arr.splice(i-2,0,res);

      }
    }
  }

  for(let el of arr){
  let temp = el;

  if(el === "+" || el ==="-" || el ==="*" | el === "/"){

    isValid = true

  }
}
if(isValid === false){
  
  break;
}

}

if(isValid === false){

  //console.log(arr.join(""))
  console.log("Error: not enough operands!")
  
}else{

console.log(arr.join(""))
}
}

janNotation(
  [
  3,
 4,
 '+'
]
)
