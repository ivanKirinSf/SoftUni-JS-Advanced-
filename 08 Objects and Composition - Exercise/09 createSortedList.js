function createSortedList(){

    let arr = [];

    return {

        add(el){

            arr.push(el);

        },

        remove(num){

            arr.splice(num,1);

        },

        get(index){

            arr[index];
        },

        get slice(){

            return arr.length
        }

    }

}
