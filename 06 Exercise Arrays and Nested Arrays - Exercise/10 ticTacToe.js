function ticTacToe(arr){

   let marker = "";

   let coordinates = [];

 let startDashboard = [

                       [false, false, false],
                       [false, false, false],
                       [false, false, false],

                     ]

                     
                     for(let k = 0; k < arr.length; k++){

                        coordinates = arr[k].split(" ");

                        if(k % 2 === 0){

                           marker = "X";
                           
                        }else if(k % 2 !== 0){

                           marker = "O"
                        }

                         if(startDashboard[Number(coordinates[0])][Number(coordinates[1])] === false){

                           startDashboard[Number(coordinates[0])][Number(coordinates[1])] = marker                           

                        }else{

                           console.log("This place is already taken. Please choose another!");
                        }                        

                        if(freeSpace(startDashboard)){

                           console.log("The game ended! Nobody wins :(") 

                          return print(startDashboard);

                        }

                        if(hasWinner(startDashboard, marker)){

                           console.log(`Player ${marker} wins!`);

                           return print(startDashboard)

                        }

                        for(let line of startDashboard){

                        console.log(line.join("\t"))

                     } 
                        
                     }
                     
                     function freeSpace(dashboard){

                        let res = dashboard.flat();

                        let filtered = res.filter(x => x === false);

                        if(filtered.length > 0){

                           return false
                        }

                        return true

                     }

                     function hasWinner(dashboard, marker){

                        for(let i = 0; i < dashboard.length; i++){
                           
                           if(dashboard[i][0] === marker &&
                              dashboard[i][1] === marker &&
                              dashboard[i][2] === marker 
                           ){
                              
                              return true

                           }else if(

                              dashboard[0][i] === marker &&
                              dashboard[1][i] === marker &&
                              dashboard[2][i] === marker 

                           ){

                              return true;

                           }else if(

                              dashboard[0][0] === marker &&
                              dashboard[1][1] === marker &&
                              dashboard[2][2] === marker 

                           ){

                              return true;

                           }else if(

                              dashboard[0][2] === marker &&
                              dashboard[1][1] === marker &&
                              dashboard[2][0] === marker 

                           ){

                              return true;
                              
                           }

                        }

                     }

                     function print(dashboard){

                        for(let line of startDashboard){

                        console.log(line.join("\t"))

                     }

                     }      
                     

}

