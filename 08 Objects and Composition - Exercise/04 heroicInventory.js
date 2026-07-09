function heroicInventory(input) {

    let res = [];

    let hero = {};

    for(let el of input){

        let temp = el.split(' / ');

        let name = temp.shift();
        let level = temp.shift();
        let itemsArr = temp.shift().split(', ');

        hero.name = name;
        hero.level = level;

        itemsArr >= itemsArr ? itemsArr : [];

        hero.itemsArr

        console.log(hero);


    }

}
