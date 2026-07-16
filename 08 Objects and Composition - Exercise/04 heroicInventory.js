function heroicInventory(info){

let res = [];

for(let el of info){

   let hero = {};

   if(!el.trim()){
      continue;
   }

   let temp = el.split(" / ");

   let heroName = temp.shift();

   hero.name = heroName;

   let heroLevel = Number(temp.shift());

   hero.level = heroLevel;

   let heroItems = temp.shift();

   heroItems = heroItems ? heroItems.split(", ") : [];

   hero.items = heroItems; 
   
   res.push(hero);
   //console.log(hero);

}

console.log(JSON.stringify(res))

}
