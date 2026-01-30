function ticTacToe(arr){

   let marker = "";

   let coordinates = [];

 let startDashboard = [
                       [false, false, false],
                       [false, false, false],
                       [false, false, false],
                     ]

                     let index = 0
                     for(let el of arr){

                        coordinates = el.split(" ");




                        if(index % 2 === 0){

                           marker = "X";
                           
                        }else if(index % 2 !== 0){

                           marker = "O"
                        }

                        if(isEmpty(startDashboard)){

                           console.log("This place is already taken. Please choose another!")

                        }

                        index++
                     }

                     function isEmpty(dashboard){

                        if(startDashboard[Number(coordinates[0])][Number(coordinates[1])] === false){

                           return false;

                        }else{

                           return true;
                        }

                     }
}



