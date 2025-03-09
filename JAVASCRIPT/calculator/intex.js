var ShowInput = document.getElementById("ShowInput")

function append(userInput) {
    ShowInput.value += userInput
}
function deleteLast() {
    // ShowInput.value = ShowInput.value.slice(0, -1)
    ShowInput.value = ShowInput.value.substring(0, ShowInput.value.length - 1)
}

function clearOutput() {
    ShowInput.value = ""
}
function calculate() {
    try {
        ShowInput.value = eval(ShowInput.value)
    } catch (error) {

        ShowInput.value = "Error"
        clearOutput()
    }
}

var now = new Date();
var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // 12-hour format
};


var formatted_Time_With_AmPm = now.toLocaleTimeString('en-US', options);
console.log(formatted_Time_With_AmPm);

var formatted_Time = formatted_Time_With_AmPm.replace(/( AM| PM)/gi, ''); // Remove AM/PM

var currentDay = day_name[now.getDay()];

var timeWithDay = ` ${currentDay} ${formatted_Time}`;

document.getElementById("time").innerText = timeWithDay;
