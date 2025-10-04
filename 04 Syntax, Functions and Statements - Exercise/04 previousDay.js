function previousDay(year, month, day){

let info = new Date(year, month-1, day-1);

console.log(`${info.getFullYear()}-${info.getMonth()+1}-${info.getDate()}`);

}
