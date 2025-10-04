function previousDay(year, month, day){

    let info = new Date(year, month, day);

    let newInfo = info.getDate();

    newInfo = newInfo - 1;

    info.set(newInfo[day])

    console.log(info)

    //console.log

}
