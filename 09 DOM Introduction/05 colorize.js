function colorize(){

let arr = document.querySelectorAll('table tr');

let index = 0;

for(let line of arr){

    index ++;

    if(index % 2 == 0){

       line.style.background = 'teal';

    }

}

}
