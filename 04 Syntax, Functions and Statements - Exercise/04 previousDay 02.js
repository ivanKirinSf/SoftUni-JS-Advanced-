function previousDay(year, month, day){

 //let date = new Date().toISOString();

 let date = new Date();

 date.setFullYear(year);

 date.setMonth(month-1);

 date.setDate(day-1);

 console.log(`${date.getFullYear(year)}-${date.getMonth(month)+1}-${date.getDate()}`)

}

previousDay(2015, 5, 10)
