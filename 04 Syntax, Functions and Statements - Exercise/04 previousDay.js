function previousDay(year, month, date){

    let currentDate = new Date(year, month-1, date);

    currentDate.setDate(currentDate.getDate()-1);

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`)



}
