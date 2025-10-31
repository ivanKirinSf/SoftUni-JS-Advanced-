function dayInAMonth(month, year){

    let info = new Date();

    info.setYear(year);

    info.setMonth(month, 0);

    let day = info.getDate()

    console.log(day);

}

dayInAMonth(2, 2021)
