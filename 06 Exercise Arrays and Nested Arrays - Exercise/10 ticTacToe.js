function ticTacToe(data) {

    let initialDashboard = [

        [false, false, false],
        [false, false, false],
        [false, false, false]

    ];

    let isPlayerOnePlay = true;

    for (let coordinates of data) {

        let [x, y] = coordinates.split(" ");

        let marker = isPlayerOnePlay ? "X" : "O";

        if (initialDashboard[x][y]) {

            console.log("This place is already taken. Please choose another!");

            continue;
        }

        initialDashboard[x][y] = marker;

        if (checkWin(initialDashboard, marker)) {

            console.log(`Player ${marker} wins!`);

        }

        if (!checkFreeSpace(initialDashboard)) {

            console.log("The game ended! Nobody wins :(")

            return

        }

        isPlayerOnePlay = !isPlayerOnePlay;

        function checkWin(dashboard, market) {

            for (let i = 0; i < dashboard.length; i++) {
                if (dashboard[i][0] === marker &&
                    dashboard[i][1] === marker &&
                    dashboard[i][2] === marker) {

                    return true;

                }

                else if (
                    dashboard[0][i] === marker &&
                    dashboard[1][i] === marker &&
                    dashboard[2][i] === marker) {

                    return true;

                } else if (

                    dashboard[0][0] === marker &&
                    dashboard[1][1] === marker &&
                    dashboard[2][2] === marker

                ) {

                    return true;
                } else if (

                    dashboard[0][2] === marker &&
                    dashboard[1][1] === marker &&
                    dashboard[2][0] === marker
                ) {

                    return true;
                }

                return false


            }
        }

        function checkFreeSpace(dashboard) {

            return !!dashboard.flat().filter(x => !x).length
        }


    }

    function printDashboard(dashboard) {

        dashboard.forEach(row => console.log(row.join("/t")))

    }
}


