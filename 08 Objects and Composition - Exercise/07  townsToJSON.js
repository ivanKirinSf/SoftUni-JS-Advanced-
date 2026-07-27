function townsToJSON(info){

    let obj = {};

    let txt = info.shift();

    let sliced = txt.slice(2, txt.length-2);

    let header = sliced.split(" | ");

    let col1 = header.shift();

    let col2 = header.shift();

    let col3 = header.shift();

    //console.log(col3)

   for(let line of info){

    let lineLength = line.length;

    let sliced = line.slice(2, lineLength-2);

    let temp = sliced.split(" | "); 

    let city = temp.shift();

    let lati = Number(temp.shift()).toFixed(2);

    let long = Number(temp.shift()).toFixed(2);

    obj[col1] = city;

    obj[col2] = Number(lati);

    obj[col3] = Number(long);

     console.log(JSON.stringify(obj));

   }

}
