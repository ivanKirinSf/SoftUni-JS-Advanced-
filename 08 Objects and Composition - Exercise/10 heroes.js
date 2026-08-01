function solve(){


    return{


        mage(name){

            heroName: name,
            health: 100,
            mana: 100,

            cast(spell){

                spellName: spell;
                this.mana -= 1;

            }

        },

        fighter(name){

           heroName: name,
           health: 100,
           stamina: 100,

           fight(){

            this.stamina -=1

           }

        }
    }
}
