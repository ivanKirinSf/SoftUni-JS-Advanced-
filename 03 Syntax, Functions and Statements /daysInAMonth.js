function daysOfMonth(month, year){

    let info = new Date(year, month, 0);

    let days = info.getDate();

    console.log(days)

}

daysOfMonth(3, 2021)
