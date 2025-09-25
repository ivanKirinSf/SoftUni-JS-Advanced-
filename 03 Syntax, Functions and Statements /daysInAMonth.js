function solve(month, year){

let info = new Date(month, year, 0);

let days = info.getDate();

console.log(days);

}

solve(11, 2012)
