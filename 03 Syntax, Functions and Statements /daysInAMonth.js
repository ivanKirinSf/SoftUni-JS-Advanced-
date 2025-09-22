function daysInAMonth(month, year) {

    let info = new Date(year, month, 0);

    let date = info.getDate();

    return date

}

daysInAMonth(11, 2021)
