function colorize(){

    let rows = document.querySelectorAll('<table> <tr>');

    let index = 0;

    for(let line of rows){

        if(index % 2 === 0){

            document.getElementById(line).style.background

        }

        index++        
    }
}
