function days(month, year){

    let date = new Date(year, month, 0);

    let days = date.getDate();

    console.log(days)

}

days(2, 2021)
