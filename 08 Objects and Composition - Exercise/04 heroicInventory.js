function heroicInventory(info){

let res = [];

for(let el of info){

   let hero = {};

   if(!el.trim()){

      continue;
   }

   let temp = el.split(" / ");

   let heroName = temp.shift();

   let heroLevel = temp.shift();

   let heroItems = temp.shift();

   heroItems = heroItems ? heroItems.split(", ") : heroItems;

   hero.name = heroName;

   hero.level = Number(heroLevel);

   hero.items = heroItems;

   res.push(hero);

  //console.table(hero);
}

console.log(JSON.stringify(res));

}
