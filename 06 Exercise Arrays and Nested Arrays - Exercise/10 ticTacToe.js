function ticTacToe(arr){

    let player = "one";

    let mark = "X";

    

    let dashboard = [[false, false, false],
                     [false, false, false],
                     [false, false, false]]


                     for(let i = 0; i< arr.length; i++){

                        if(i % 2 === 0){

                           player = "one";

                        }else{

                           player = "two";

                        }

                        let move = arr[i].split(" ");

                        let dashRow = move[0];

                        let dashColumn = move[1];

                        //console.log(player)

                        if(player === "one"){

                            mark = "X";

                            //console.log(mark)

                        }else {

                            mark = "O";

                            //console.log(mark)
                        }                  



                        console.log(dashColumn)
                     }
}

ticTacToe([
 "0 1",
 //"0 0",
 //"0 2", 
 //"2 0",
 //"1 0",
 //"1 1",
 //"1 2",
 //"2 2",
 //"2 1",
 //"0 0"
 ]
)
