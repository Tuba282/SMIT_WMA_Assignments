// toggle functionality

var toggle = document.getElementById("toggle");
var links = document.querySelector(".links");

function toggleMenu() {
    links.classList.toggle("show-links");
}

toggle.addEventListener("click", toggleMenu);

// number game functionality
var attempts = 0;
var maxAttempts = 3;
var gameOver = false;

function number() {
    document.getElementById("numberGame").style.display = 'grid';
    document.getElementById("letterGame").style.display = 'none';
    document.getElementById("flagGame").style.display = 'none';
    document.querySelector(".gameContainer").style.background = 'var(--lightBlue)';
}

function check() {
    if (attempts >= maxAttempts || gameOver) {
        document.getElementById("remarks").innerHTML = 'Maximum attempts reached!';
        return; // Stop further execution if max attempts are reached or game is over
    }

    var userGuess = parseInt(document.getElementById("userguess").value);
    var sysGuess = Math.floor(Math.random() * 10 + 1);

    document.getElementById("userNum").innerHTML = userGuess;
    document.getElementById("sysNum").innerHTML = sysGuess;

    if (sysGuess === userGuess) {
        document.getElementById("remarks").innerHTML = 'Your guess matched';
    } else if (sysGuess === userGuess + 1 || sysGuess === userGuess - 1) {
        document.getElementById("remarks").innerHTML = 'Your guess is close';
    } else {
        document.getElementById("remarks").innerHTML = 'Your guess is wrong';
    }

    attempts++;
    document.getElementById("attempt").innerText = attempts;

    if (attempts >= maxAttempts) {
        document.getElementById("restartClose").style.display = "flex";
        gameOver = true; // Set game over state to true
    }
}

function restart() {
    document.getElementById("userguess").value = "";
    document.getElementById("userNum").innerHTML = "";
    document.getElementById("sysNum").innerHTML = "";
    document.getElementById("remarks").innerHTML = "";
    document.getElementById("attempt").innerText = "";
    attempts = 0;
    gameOver = false;
}

function closeGame() {
    document.getElementById("numberGame").style.display = "none";
    document.querySelector(".gameContainer").style.cssText = `
        background: url(./assets/body.png) no-repeat;
        background-position: center;
        background-size: contain;
    `;
}


// letter game functionality

function Letter() {
    document.getElementById("letterGame").style.display = 'grid';
    document.getElementById("numberGame").style.display = 'none';
    document.getElementById("flagGame").style.display = 'none';
    document.querySelector(".gameContainer").style.background = 'var(--lightBlue)';
}
var userGuessLtr = '';

function letter(ltr) {
    userGuessLtr = ltr;
    console.log('User Guess: ' + userGuessLtr);
}

function LetterCheck() {
    if (attempts >= maxAttempts || gameOver) {
        document.getElementById("letrRemarks").innerHTML = 'Maximum attempts reached!';
        return; // Stop further execution if max attempts are reached or game is over
    }


    if (userGuessLtr === '') {
        userGuessLtr = "Please click a letter first";
    }

    var sysLetr = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    var convert_into_str = String.fromCharCode(sysLetr);

    document.getElementById("userLetr").innerHTML = userGuessLtr;
    document.getElementById("sysLetr").innerHTML = convert_into_str;

    console.log('User Guess: ' + userGuessLtr);

    if (convert_into_str === userGuessLtr) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

    userGuessLtr = '';
    if (sysLetr === convert_into_str) {
        document.getElementById("letrRemarks").innerHTML = 'Your guess matched';
    } else if (sysLetr === convert_into_str + 1 || sysLetr === convert_into_str - 1) {
        document.getElementById("letrRemarks").innerHTML = 'Your guess is close';
    } else {
        document.getElementById("letrRemarks").innerHTML = 'Your guess is wrong';
    }

    attempts++;
    document.getElementById("letrAttempt").innerText = attempts;

    if (attempts >= 3) {
        document.getElementById("letterRestartClose").style.display = "flex";
    }
}
function letterRestart() {
    document.getElementById("userLetr").innerHTML = "";
    document.getElementById("sysLetr").innerHTML = "";
    document.getElementById("letrRemarks").innerHTML = "";
    document.getElementById("letrAttempt").innerText = "";
    attempts = 0;
    gameOver = false;
}

function letterClose() {
    document.getElementById("letterGame").style.display = "none";
    document.querySelector(".gameContainer").style.cssText = `
        background: url(./assets/body.png) no-repeat;
        background-position: center;
        background-size: contain;
    `;
}

// city Name functionaity
var userCityGuess = '';
var correctCity = '';

function cityName() {
    document.getElementById("flagGame").style.display = 'grid';
    document.getElementById("letterGame").style.display = 'none';
    document.getElementById("numberGame").style.display = 'none';
    document.querySelector(".gameContainer").style.background = 'var(--lightBlue)';
    showHint();
}

function city(Name) {
    userCityGuess = Name;
    console.log('userCityGuess : ' + userCityGuess);
}

function showHint() {
    var cityHints = [
        'The largest city in Pakistan and an economic hub.',
        'Rawal Lake is a popular recreation spot.',
        'Anarkali Bazaar is a popular shopping destination.',
        'Known for manufacturing FIFA World Cup footballs.',
        'Previously known as "Lyallpur".',
        'Known for the historic Qissa Khwani Bazaar.',
        'Where Quaid-e-Azam spent his last days.',
        'Known as the "City of Saints".',
        'Twin city of Islamabad.',
        'Home to the busiest second deep-sea port in Pakistan.',
        'A city famous for its intricate woodwork and furniture.',
    ];

    var correctCities = [
        'Karachi',
        'Islamabad',
        'Lahore',
        'Sialkot',
        'Faisalabad',
        'Peshawar',
        'Quetta',
        'Multan',
        'Rawalpindi',
        'Gwadar',
        'Chiniot',
    ];

    var randomIndex = Math.floor(Math.random() * cityHints.length);
    document.getElementById("cityHint").innerText = cityHints[randomIndex];
    correctCity = correctCities[randomIndex];
}

function cityCheck() {
    if (gameOver) {
        document.getElementById("cityRemarks").innerText = 'Game Over! Please restart to play again.';
        return;
    }

    
    if (userCityGuess === '') {
        document.getElementById("cityRemarks").innerText = 'Please select a city first!';
        return;
    }
    
    attempts++;
    document.getElementById("cityAttempt").innerText = attempts;

    if (userCityGuess === correctCity) {
        document.getElementById("cityRemarks").innerText = 'Matched!';
    } else {
        document.getElementById("cityRemarks").innerText = 'Not Matched!';
    }

    document.getElementById("userCity").innerText = userCityGuess;
    document.getElementById("correctCity").innerText = correctCity;
    
    if (attempts >= maxAttempts) {
        gameOver = true;
        document.getElementById("cityRestartClose").style.display = "flex";
        document.getElementById("cityRemarks").innerText = 'Maximum attempts reached!';
    }
    
    // Clear user city guess for the next attempt
    userCityGuess = '';
    // Update hint at the beginning of each attempt
    showHint();
}

function cityRestart() {
    userCityGuess = '';
    attempts = 0;
    gameOver = false;
    document.getElementById("cityAttempt").innerText = attempts;
    document.getElementById("userCity").innerText = '';
    document.getElementById("correctCity").innerText = '';
    document.getElementById("cityRemarks").innerText = '';
    document.getElementById("cityHint").innerText = 'Click the city name then hit the check ...';
    document.getElementById("cityRestartClose").style.display = "none";
    showHint();
}

function cityClose() {
    document.getElementById("flagGame").style.display = 'none';
    document.querySelector(".gameContainer").style.cssText = `
        background: url(./assets/body.png) no-repeat;
        background-position: center;
        background-size: contain;
    `;
}
