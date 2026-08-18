function janNotation(data){

  let arr = [];

let obj = {

  "+": (a,b) => a+b,
  "-": (a,b) => a-b,
  "*": (a,b) => a*b,
  "/": (a,b) => a*b,

}

for(let el of data){

  let type = el.typeof(el);

  if(type === 'number'){

    arr.push(el);

  }

}
}
