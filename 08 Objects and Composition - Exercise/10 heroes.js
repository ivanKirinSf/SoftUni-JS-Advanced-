function solve(){


    return {

         mage(fighterName){

            name,
            health = 100,
            mana = 100,
            cast(spell){
                this.mana -= 1;
                console.log(`${this.name} cast ${spell}`)
            }
         },

         fighter(fighterName){

            name,
            health = 100,
            stamina = 100,
            fight(){
                
                stamina -=1;
                console.log(`${this.name} slashes at the foe!`)

            }
         }


    }
}
