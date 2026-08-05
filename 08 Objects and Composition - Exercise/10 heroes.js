function solve(){

return {

    mage(mageName){

      return{

        name: mageName,
        health: 100,
        mana: 100,

        cast(spell){

          this.mana -= 1;
          console.log(`${this.name} cast ${spell}`)
        }
      }
    },

    fighter(fighterName){

      return{
       
        name: fighterName,
        health: 100,
        stamina: 100,

        fight(){

          this.stamina -= 1;
          console.log(`${this.name} slashes at the foe!`);
        }
      }
    }
}
}

//check!!!
