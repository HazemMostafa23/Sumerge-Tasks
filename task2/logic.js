var turn = 1;

function call(id) {

    if (turn == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).style.color = "green";
        document.getElementById(id).disabled = true;
        document.getElementById('turn')
            .innerHTML = "Player " + "<span style='color: red;'>O </span>" + "Turn";

        turn = 0;
        win("X");


    }
    else {
        document.getElementById(id).value = "O"
        document.getElementById(id).style.color = "red";
        document.getElementById(id).disabled = true;
        document.getElementById('turn')
            .innerHTML = "Player " + "<span style='color: green;'>X </span>" + "Turn";
        turn = 1;
        win("O");

    }


}

function win(player) {
    btn_list = [];
    for (var i = 0; i < 9; i++) {
        500
        btn_list.push(document.getElementById([i]).value);
    }

    if (btn_list[0] == player && btn_list[1] == player && btn_list[2] == player) {
        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }

        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[0] == player && btn_list[3] == player && btn_list[6] == player) {
        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }

        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[0] == player && btn_list[4] == player && btn_list[8] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);
    }
    else if (btn_list[0] == player && btn_list[4] == player && btn_list[8] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[1] == player && btn_list[4] == player && btn_list[7] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);


    }
    else if (btn_list[2] == player && btn_list[5] == player && btn_list[8] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[3] == player && btn_list[4] == player && btn_list[5] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[6] == player && btn_list[7] == player && btn_list[8] == player) {

        if (player == "X") {

            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: green;'>X </span>" + " won";


        }
        else {
            document.getElementById('winner')
                .innerHTML = "Player " + "<span style='color: red;'>O </span>" + " won";


        }
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (btn_list[6] == player && btn_list[4] == player && btn_list[2] == player) {

        document.getElementById('winner')
            .innerHTML = "Player " + player + " won";
        disablebtns();
        setTimeout(function () { alert("Player " + player + " Won"); }, 200);

    }
    else if (((btn_list[0] == 'X' || btn_list[0] == 'O') && (btn_list[1] == 'X'
        || btn_list[1] == 'O') && (btn_list[2] == 'X' || btn_list[2] == 'O') &&
        (btn_list[3] == 'X' || btn_list[3] == 'O') && (btn_list[4] == 'X' ||
            btn_list[4] == 'O') && (btn_list[5] == 'X' || btn_list[5] == 'O') &&
        (btn_list[6] == 'X' || btn_list[6] == 'O') && (btn_list[7] == 'X' ||
            btn_list[7] == 'O') && (btn_list[8] == 'X' || btn_list[8] == 'O'))) {
        alert("Tie Game");
        reset();
    }

}
function reset() {

    for (var i = 0; i < 9; i++) {
        document.getElementById(i).value = "";
        document.getElementById(i).disabled = false;
    }
    document.getElementById('winner')
        .innerHTML = "";
    turn = 1;
    document.getElementById('turn')
        .innerHTML = "Player " + "<span style='color: green;'>X </span>" + "Turn";


}
function disablebtns() {
    document.getElementById('turn')
        .innerHTML = "Game Over";
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).disabled = true;
    }


}