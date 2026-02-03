function ticTacToe(data){

  let mark = "";

  let line = 0;

  let column = 0;

  let startDashboard = [

    [false, false, false],
    [false, false, false],
    [false, false, false],

]

for(let i = 0; i < data.length; i++){

  let coordinates = data[i].split(" ");

  line = Number(coordinates[0]);

  column = Number(coordinates[1]);

  if(i % 2 === 0){

    mark = "X";

  }else {

    mark = "O";

  }

  if(checkPosition(startDashboard)){

    console.log("This place is already taken. Please choose another!");  

  }

  if(freeSpace(startDashboard)){

    console.log("The game ended! Nobody wins :(")

    return print(startDashboard)

  }

  if(haveAWinner(startDashboard)){

    console.log(`Player ${mark} wins!`)

    return print(startDashboard)


  }

  print(startDashboard)

  //console.log(mark);

}

function checkPosition(dashboard){

  if(dashboard[line][column] !== false){

    return true;

  }

}

function freeSpace(dashboard){

  let isFree = false

  for(let row of dashboard){

    let index = row.indexOf(false);

    if(index === -1){

      isFree = true;
      
      //return true;

    }    
  }

  if(isFree === false){

    return true;
  }

}

function haveAWinner(dashboard){

  for(let i = 0; i < startDashboard.length; i++){

                           if(dashboard[i][0] === mark &&
                              dashboard[i][1] === mark &&
                              dashboard[i][2] === mark 
                           ){
                              
                              return true

                           }else if(

                              dashboard[0][i] === mark &&
                              dashboard[1][i] === mark &&
                              dashboard[2][i] === mark 

                           ){

                              return true;

                           }else if(

                              dashboard[0][0] === mark &&
                              dashboard[1][1] === mark &&
                              dashboard[2][2] === mark 

                           ){

                              return true;

                           }else if(

                              dashboard[0][2] === mark &&
                              dashboard[1][1] === mark &&
                              dashboard[2][0] === mark 

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

