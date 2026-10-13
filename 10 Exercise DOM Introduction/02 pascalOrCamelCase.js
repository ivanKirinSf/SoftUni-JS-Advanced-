function solve(a, b){

 let text = a.split(" ");

 let res = "";

 let final = "";

 if(b !== "Camel Case" || b !== "Pascal Case" ){

 console.log("Error!");

 }

 for(let i = 0; i < text.length; i++){

    if( b === "Camel Case"){

if(i % 2 !== 0){

    let temp1 = text[i];

    let char = temp1.slice(0,1).toUpperCase();

    let lastPart = temp1.slice(1);

    res = char + lastPart;

    final += res;

    }else{

    let temp2 = text[i];

    final += temp2  

    }  

    }else if(b === "Pascal Case"){

        let temp3 = text[i].toLowerCase();

        let char = temp3[0].toUpperCase();

        let lastPart = temp3.slice(1);

        res = char + lastPart;

        final += res;

        //console.log(res)
        
    }

    //console.log(word)

 }

 console.log(final)

}

solve("secOND eXamPLE", "Another Case")
