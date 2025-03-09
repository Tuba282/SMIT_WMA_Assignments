// javascript practise sheet 49-52
// EVENTS

function signUp(event) {
    event.preventDefault()
    var get_firstName = document.getElementById("get_firstName").value
    var get_lastName = document.getElementById("get_lastName").value
    var get_email = document.getElementById("get_email").value
    var get_pswd = document.getElementById("get_pswd").value
    // console.log(get_firstName, get_lastName, get_email, get_pswd);
    document.getElementById("signUp").style.display = 'none'
    document.getElementById("submission").style.display = 'block'
    document.getElementById("put_firstName").innerHTML = get_firstName
    document.getElementById("put_lastName").innerHTML = get_lastName
    document.getElementById("put_email").innerHTML = get_email
    document.getElementById("put_pswd").innerHTML = get_pswd
}

function toogle() {
    var moreText = "A beautiful day, a gentle breeze, green grass underfoot and concessions tents all around. It had been an absolutely beautiful day: cloudless, warm and awash with the scent of blossom.";
    var textElement = document.getElementById("text");
    var buttonElement = document.getElementById("more");

    if (textElement.className !== "showText") {
        textElement.className = "showText";
        textElement.innerHTML = moreText;
        buttonElement.innerHTML = "Read less";
    } else {
        textElement.className = "hide";
        textElement.innerHTML = '';
        buttonElement.innerHTML = "Read more";
    }
}



var currentRow;
// Delete row function
function deleteRow(button) {
    button.parentNode.parentNode.remove()
    // row.parentNode.removeChild(row);
}

// Edit row function
function editRow(button) {
    //         btn     td          tr
    var row = button.parentNode.parentNode;
    var name = row.children[1].innerText;
    var studentClass = row.children[2].innerText;
    console.log(name, studentClass);

    document.getElementById("editForm").style.display = "block";


    document.getElementById("studentName").value = name;
    document.getElementById("studentClass").value = studentClass;

    currentRow = row
}

function saveRow() {
    var new_Student_Name = document.getElementById("studentName").value
    var new_Student_Class = document.getElementById("studentClass").value
    currentRow.children[1].innerText = new_Student_Name;
    currentRow.children[2].innerText = new_Student_Class;


    document.getElementById("editForm").style.display = "none";
}