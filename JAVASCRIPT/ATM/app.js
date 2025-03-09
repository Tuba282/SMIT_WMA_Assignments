// // ATM

var balance = 50000;
var transactionType = "";




function start() {
    document.getElementById("pin").style.display = "flex";
    document.getElementById("start").style.display = "none";
}

function validatePin() {
    var pin = document.getElementById("pinInput").value;


    if (pin.length === 4) {
        document.getElementById("option").style.display = "flex";
        document.getElementById("pin").style.display = "none";
        document.querySelector(".error").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}


function options() {
    document.getElementById("option").style.display = "flex";
    document.getElementById("slip").style.display = "none";
}


function enterAmount(action) {
    document.getElementById("enterAmount").style.display = "flex";
    document.getElementById("option").style.display = "none";
    transactionType = action; // "Deposit" or "Withdraw"
    document.getElementById("InputAmount").value = "";
}

function addNum(num) {
    document.getElementById("InputAmount").value += num;
}

function del() {
    var inputAmount = document.getElementById("InputAmount");
    inputAmount.value = inputAmount.value.slice(0, -1);
}

function trnInfo() {
    var inputAmount = parseFloat(document.getElementById("InputAmount").value);
    if (isNaN(inputAmount) || inputAmount <= 0) {
        document.getElementById("errorMessage").innerText = "Please enter a valid amount.";
        return;
    }

    if (transactionType === "Deposit") {
        balance += inputAmount;
    } else if (transactionType === "Withdraw") {
        if (inputAmount > balance) {
            document.getElementById("errorMessage").innerText = "Insufficient Balance!";
            return; // Stop the transaction if balance is insufficient
        }
        balance -= inputAmount; // Subtract the amount from balance
    }

    document.getElementById("enterAmount").style.display = "none";
    document.getElementById("trnInfo").style.display = "flex";
    document.getElementById("trsc_crnt_balce").innerText = balance;

    document.getElementById("action").innerText = transactionType + " Successful";



    var random_num = Math.floor(10000000000000 + Math.random() * 90000000000000);
    document.getElementById("trsc_id").innerHTML = random_num
    var random_card = Math.floor(10 + Math.random() * 90);
    document.getElementById("trsc_card").innerHTML = random_card



    var now = new Date()
    var getdate = now.getDate()
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var getday = now.getDay()
    var getmonth = now.getMonth()
    var getyear = now.getFullYear()
    var gethour = now.getHours() % 12
    var getmints = now.getMinutes()
    var getsec = now.getSeconds()


    var formatted_date = `${days[getday]} &nbsp; ${getdate}&nbsp; ${month[getmonth]}&nbsp; ${getyear}`
    var formatted_time = `  ${gethour} : ${getmints} : ${getsec}`
    console.log(formatted_date, formatted_time);

    document.getElementById("trsc_time").innerHTML = formatted_time
    document.getElementById("trsc_date").innerHTML = formatted_date
}




function slip() {
    document.getElementById("option").style.display = "none";
    document.getElementById("trnInfo").style.display = "none";
    document.getElementById("slip").style.display = "flex";




    var random_num = Math.floor(10000000000000 + Math.random() * 90000000000000);
    document.getElementById("slip_id").innerHTML = random_num
    var random_card = Math.floor(10 + Math.random() * 90);
    document.getElementById("slip_card").innerHTML = random_card



    var now = new Date()
    var getdate = now.getDate()
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var getday = now.getDay()
    var getmonth = now.getMonth()
    var getyear = now.getFullYear()
    var gethour = now.getHours() % 12
    var getmints = now.getMinutes()
    var getsec = now.getSeconds()


    var formatted_date = `${days[getday]} &nbsp; ${getdate}&nbsp; ${month[getmonth]}&nbsp; ${getyear}`
    var formatted_time = `  ${gethour} : ${getmints} : ${getsec}`
    console.log(formatted_date, formatted_time);

    document.getElementById("slip_time").innerHTML = formatted_time
    document.getElementById("slip_date").innerHTML = formatted_date
    document.getElementById("slip_crnt_balce").innerHTML = balance
}


function cashReady() {

    document.getElementById("cashReady").style.display = "flex";
    document.getElementById("trnInfo").style.display = "none";
}
function end() {

    document.getElementById("end").style.display = "flex";
    document.getElementById("cashReady").style.display = "none";
}


function startAgain() {

    document.getElementById("end").style.display = "none";
    document.getElementById("start").style.display = "flex";
}
