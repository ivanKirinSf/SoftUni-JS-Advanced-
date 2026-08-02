function solve(){

       return{

         mage(name){

            health: 100;
            mana: 100,

            cast(spell){

               this.mana -= 1;
               console.log(`${name} cast ${spell}`)
            }
         },

         fighter(name){

            health: 100,
            stamina: 100,

            fight(){
               stamina -= 1;
               console.log(`${name} slashes at the foe!`)
            }

         }

       }

}
