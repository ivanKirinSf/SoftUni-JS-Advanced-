function jsonToHtmlTable(json){

   let arr = JSON.parse(json);

   let outputArr = ("<table>");

   outputArr.push(makeKeyArr(arr));

   function makeKeyArr(arr){

    let keys = Object.keys(arr[0]);

    console.log(keys);

   }
