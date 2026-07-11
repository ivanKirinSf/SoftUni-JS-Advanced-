function heroicInventory(input) {

  let res = [];  

  for(let el of input){

    let hero = {};

    let temp = el.split(" / ");

    let heroName = temp.shift();

    let heroLevel = temp.shift();

    hero.name = heroName;

    hero.level = Number(heroLevel);

    let heroItems = temp.shift();

    heroItems = heroItems ? heroItems.split(", ") : [];

    hero.items = heroItems;

    res.push(hero);
    
    //console.table(hero);

  }

  return console.log(res);  

  //console.log(JSON.stringify(res))

}

//console.log(JSON.stringify(heroicInventory))
