function ticTacToe(arr){

    let player1 = [];

    let player2 = [];

    let mark = "";

    let isWinner = false;

    let isFull = false;



    let dashboard = [[false, false, false],
                     [false, false, false],
                     [false, false, false]]

                     for(let i = 0; i<arr.length; i++){
                        let temp = arr[i]//.split(" ");

                        if(i % 2 === 0){

                            player1 = temp.split(" ");                           

                            mark = "X";

                            let row = Number(player1[0]);

                            let col = Number(player1[1]);

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

                            let row = Number(player2[0]);

                            let col = Number(player2[1]);

                            let el = dashboard[row][col];

                            if(el === false){

                                dashboard[row].splice(col, 1, mark);

                            }else if(el === "X" || el === "O"){

                                console.log("This place is already taken. Please choose another!");

                            }         
                            

                        }

                        //console.log(player2)

                        for(let k = 0; k < dashboard.length-1; k++){

                        let str1 = "";
                        let str2 = "";
                        let str3 = "";
                        let str4 = "";
                        let str5 = "";
                        let str6 = "";


                        dashboard[k].forEach(element => str1 += element);
                        dashboard[k+1].forEach(element => str2 += element);
                        dashboard.forEach(element => str3 += element[k]);
                        dashboard.forEach(element => str4 += element[k+1]);

                        for(let j = 0; j < dashboard.length; j++){
                            
                            let symbol1 = dashboard[j][j]

                            str5 += symbol1;

                            let symbol2 = dashboard[j][(dashboard.length-1)-j];

                            str6 += symbol2;
                        }

                        if(str1 === "XXX" || str2 === "XXX" || str3 === "XXX" || str4 === "XXX" || str5 === "XXX" || str6 === "XXX" ){

                            console.log("Player X wins!");

                            isWinner = true

                            break;

                        }else if(str1 === "OOO" || str2 === "OOO" || str3 === "OOO" || str4 === "OOO" || str5 === "OOO" || str6 === "OOO"){

                            console.log("Player O wins!");

                            isWinner = true

                            break;

                        }

                     }

                     let strFull = [];

                     for(let line of dashboard){

                         let index = line.indexOf(false);

                         if(index === -1){

                            strFull += -1;

                         }

                         if(strFull === "-1-1-1"){

                            isFull = true;
                         }



                     }

                     if(isWinner){


                        break;
                     }

                     if(isFull === true){

                        console.log("The game ended! Nobody wins :(")

                        break;
                     }

                    }

                     for(let line of dashboard){

                        console.log(line.join("\t"))
                     }  
                     
                    }


