function createSortedList(){

    let arr = [];

    return {

          add(el){

            arr.push(el);
            arr.sort((a,b) => a-b);

          },

          remove(index){

            arr.splice(index, 1)

          },

          get(index){

        return arr[index];

          }          
    }

    get size(){

            return arr.length
            
          }
    
}
