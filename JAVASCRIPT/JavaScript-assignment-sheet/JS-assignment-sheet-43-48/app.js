// javascript practise sheet 43-48
// EVENTS


function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.style.display = 'none';
}

function inc() {
    var count = document.getElementById("count")
    count.innerText = parseInt(count.innerText) + 1

}
function dec() {
    var count = document.getElementById("count")
    count.innerText = parseInt(count.innerText) - 1
}