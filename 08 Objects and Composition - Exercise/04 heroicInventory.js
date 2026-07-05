function heroicInventory(info){

 let res = [];

 let hero = {};
 
 
 for(let i = 0; i < info.length; i++){

    let hero = {};

    let temp = info[i].split(" / ");

    let name = temp.shift();

    let level = Number(temp.shift());

    let itemsStr = temp.shift(); 
    
    let itemsArr = itemsStr.split(", ");

    hero.name = name;

    hero.level = level;

    hero.items = itemsArr;

    res.push(hero)

    //console.log(itemsArr)

    //hero = {};

 }

 return console.log(JSON.stringify(res))
    
}
