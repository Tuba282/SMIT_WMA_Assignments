
function toss_game() {
    var player_name = document.getElementById("player-name");
    player_name.innerHTML = prompt("Enter Your Name ...");
}

function toss_start() {
    var player_name = document.getElementById("player-name");
    var toss = Math.floor(Math.random() * 2);
    if (toss === 0) {
        document.getElementById("toss-output").innerHTML = player_name.innerHTML + " Wins with Heads";
    } else {
        document.getElementById("toss-output").innerHTML = "System Wins with Tails";
    }
}

var user_name;

function guess_game() {
    user_name = document.getElementById("user-name");
    user_name.innerHTML = prompt("Enter Your Name ...");
}

function guess_start() {
    var sys_guess = Math.floor(Math.random() * 10 + 1);
    console.log(sys_guess);
    var user_guess = +prompt("Enter your guess (1-10):");

    document.getElementById("sys-guess").innerHTML = sys_guess;
    document.getElementById("user-guess").innerHTML = user_guess;

    if (sys_guess === user_guess) {
        document.getElementById("guess-output").innerHTML = " Congrats " + user_name.innerHTML + " You Win!";
    } else if (sys_guess === user_guess + 1 || sys_guess === user_guess - 1) {
        document.getElementById("guess-output").innerHTML = user_name.innerHTML + " Too Close!";
    } else {
        document.getElementById("guess-output").innerHTML = user_name.innerHTML + " You Lose!";
    }
}