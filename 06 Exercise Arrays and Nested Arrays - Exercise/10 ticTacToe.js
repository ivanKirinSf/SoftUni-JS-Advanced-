function ticTacToe(arr){

    

    let player1 = [];

    let player2 = [];

    let mark = "";



    let dashboard = [[false, false, false],
                     [false, false, false],
                     [false, false, false]]

                     for(let i = 0; i<arr.length; i++){
                        let temp = arr[i]//.split(" ");

                        if(i % 2 === 0){

                            player1 = temp.split(" ");                           

                            mark = "X";

                            let row = player1[0];

                            let col = player1[1];

                            let el = dashboard[row][col];

                            if(el === false){

                                dashboard[row].splice(col, 1, mark)
                            }else if(el === "X" || el === "O"){

                                console.log("This place is already taken. Please choose another!");

                            }
                            
                            //console.log(el)

                        }else if(i % 2 !== 0) {

                            player2 = temp.split(" ");                           

                            mark = "O";

                            let row = player2[0];

                            let col = player2[1];

                            let el = dashboard[row][col];

                            if(el === false){

                                dashboard[row].splice(col, 1, mark);

                            }else if(el === "X" || el === "O"){

                                console.log("This place is already taken. Please choose another!");

                            }                       
                            

                        }

                        //console.log(player2)
                     }

                     for(let k = 0; k < dashboard.length-1; k++){

                        let str1 = "";
                        let str2 = "";
                        let str3 = "";
                        let str4 = "";


                        dashboard[k].forEach(element => str1 += element);
                        dashboard[k+1].forEach(element => str2 += element);
                        dashboard.forEach(element => str3 += element[k]);
                        dashboard.forEach(element => str4 += element[k+1]);

                        if(str1 === "XXX" || str2 === "XXX" || str3 === "XXX" || str4 === "XXX"){

                            console.log("Player X wins!")

                        }else if(str1 === "XXX" || str2 === "XXX" || str3 === "XXX" || str4 === "XXX"){

                            console.log("Player O wins!")

                        }

                     }


                     for(let line of dashboard){

                        console.log(line)
                     }

                     

}


