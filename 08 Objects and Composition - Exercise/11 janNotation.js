function janNotation(data){

  let arr = [];

obj = {

  "+": (a,b) => a+b,
  "-": (a,b) => a-b,
  "*": (a,b) => a*b,
  "/": (a,b) => a*b,

}

  for(let el of data){

    let type = typeof(el)

    if(type === "number"){

      arr.push(el)

    }

  }

}
