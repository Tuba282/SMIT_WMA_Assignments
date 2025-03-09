// get Date and Time First
var now = new Date()

var formattedTime = now.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: true });
formattedTime = formattedTime.replace(/(AM|PM)/gi, '').trim();

document.querySelector(".time").innerHTML = formattedTime

var date = now.getDate()
var monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Month = now.getMonth()
var Year = now.getFullYear()
document.getElementById("date").innerHTML = date
document.getElementById("month").innerHTML = monthFull[Month]
document.getElementById("year").innerHTML = Year

// get Name


var nameInput = document.getElementById("nameInput")
nameInput.addEventListener("blur", function () {

    document.getElementById("name").innerHTML = `Good Day ${nameInput.value} ...`
})

/******************************************************************************************/
/******************************************************************************************/
/******************************************************************************************/

// sary events ki id's
var home = document.getElementById("home");
var displayHome = document.getElementById("displayHome");
var task = document.getElementById("task");
var displayTask = document.getElementById("displayTask");
var activity = document.getElementById("activity");
var displayActivity = document.getElementById("displayActivity");
var BackToHome = document.getElementById("BackToHome");
var goToActivity = document.getElementById("goToActivity");
var BackToActivity = document.getElementById("BackToActivity");
var gotoHome = document.getElementById("gotoHome");


// Event listeners for navigation buttons
BackToHome.addEventListener("click", () => {
    displayHome.style.display = "grid";
    displayTask.style.display = "none";
    displayActivity.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-1.png')"; // Set Background-1 for Home
});

goToActivity.addEventListener("click", () => {
    displayActivity.style.display = "grid";
    displayHome.style.display = "none";
    displayTask.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-2.png')";
});

BackToActivity.addEventListener("click", () => {
    displayTask.style.display = "grid";
    displayActivity.style.display = "none";
    displayHome.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-2.png')";
});

gotoHome.addEventListener("click", () => {
    displayHome.style.display = "grid";
    displayTask.style.display = "none";
    displayActivity.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-1.png')";
});


// Event listeners for menu items
home.addEventListener("click", () => {
    displayHome.style.display = "grid";
    displayActivity.style.display = "none";
    displayTask.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-1.png')";
});

task.addEventListener("click", () => {
    displayTask.style.display = "grid";
    displayActivity.style.display = "none";
    displayHome.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-2.png')";
});

activity.addEventListener("click", () => {
    displayActivity.style.display = "grid";
    displayHome.style.display = "none";
    displayTask.style.display = "none";
    document.querySelector(".blackCover").style.backgroundImage = "url('./assets/Background-2.png')";
});


//Home Slider
var wrapper = document.querySelector(".wrapper");
var slides = document.querySelectorAll(".slide");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentIndex = 0;
var slideWidth = slides[0].clientWidth + 220;
next.addEventListener("click", function () {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
        wrapper.style.transform = `translateX(220px)`;
    } else {
        currentIndex++;
        wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    console.log(currentIndex);
});

prev.addEventListener("click", function () {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
        wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    } else {
        currentIndex--;
        wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }

    console.log(currentIndex);
});

// Add (plus Button) hide-show

var todoList = document.querySelector(".todoList")
var add = document.getElementById("add")
add.addEventListener("click", function () {
    var add = document.querySelector(".add")
    if (add.style.display === "flex") {
        add.style.display = "none"
    } else {
        add.style.display = "flex"
    }
})


// main functioning
var getTask = document.getElementById("getTask");
var addTaskButton = document.getElementById("addTask");
var closeTaskButton = document.getElementById("closeTask");

addTaskButton.addEventListener('click', () => {
    // Get values from input fields
    var taskValue = document.getElementById("TaskInput").value;
    var timeValue = document.getElementById("TimeInput").value;

    if (taskValue.trim() === "" || timeValue.trim() === "") {
        document.querySelector(".errorMessage").style.display = 'block'
        document.querySelector(".add").style.height = '200px'
        return;
    }

    // Create flexTodo div
    var flexTodo = document.createElement("div");
    flexTodo.setAttribute("class", "flexTodo");

    // Create checkbox wrapper
    var checkbox_wrapper = document.createElement("div");
    checkbox_wrapper.setAttribute("class", "checkbox-wrapper");
    var checkBoxInput = document.createElement("input");
    var randomId = Math.floor(Math.random() * 1000 + 1);
    checkBoxInput.setAttribute("id", `_checkbox-${randomId}`);
    checkBoxInput.setAttribute("type", "checkbox");
    var label = document.createElement("label");
    label.setAttribute("for", `_checkbox-${randomId}`);
    var tick_mark = document.createElement("div");
    tick_mark.setAttribute("class", "tick_mark");
    label.appendChild(tick_mark);
    checkbox_wrapper.appendChild(checkBoxInput);
    checkbox_wrapper.appendChild(label);

    // Create todoText
    var todoText = document.createElement("div");
    todoText.setAttribute("class", "todoText");
    var spanTodoTitle = document.createElement("span");
    spanTodoTitle.setAttribute("id", "todoTitle");
    var spanTitleText = document.createTextNode(taskValue);
    spanTodoTitle.appendChild(spanTitleText);

    var spanTodoTime = document.createElement("span");
    spanTodoTime.setAttribute("id", "todoTime");
    var spanTimeText = document.createTextNode(timeValue);
    spanTodoTime.appendChild(spanTimeText);

    todoText.appendChild(spanTodoTitle);
    todoText.appendChild(spanTodoTime);

    // // Create edit button
    var editButtonDiv = document.createElement('div');
    var editIcon = document.createElement("i")
    editIcon.setAttribute("class", 'fa-solid fa-plus')
    editButtonDiv.appendChild(editIcon)
    editButtonDiv.setAttribute("id", 'todoEditBtn');
    editButtonDiv.addEventListener('click', function () {
        EditTask(this); // Call the function when clicked
    });

    // Create SVG
    var newSvg = document.createElement("svg");
    newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    newSvg.setAttribute("width", "30");
    newSvg.setAttribute("height", "30");
    newSvg.setAttribute("viewBox", "0 0 32 32");

    var newPath = document.createElement("path");
    newPath.setAttribute("fill", "#c8b598");
    newPath.setAttribute("d", "M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z");
    newSvg.appendChild(newPath);
    editButtonDiv.appendChild(newSvg);

    // Append all elements to flexTodo
    flexTodo.appendChild(checkbox_wrapper);
    flexTodo.appendChild(todoText);
    flexTodo.appendChild(editButtonDiv);

    // Append flexTodo to parent container
    document.getElementById("todos").appendChild(flexTodo);

    // Clear input fields after adding the task
    document.getElementById("TaskInput").value = "";
    document.getElementById("TimeInput").value = "";


    document.getElementById("getTask").style.display = 'none';

    document.getElementById("todos").appendChild(flexTodo);





    var labels = document.querySelectorAll("label");


    labels.forEach(label => {
        label.addEventListener("click", function () {

            var todoItem = label.closest(".flexTodo");


            var todoTitle = todoItem.querySelector("#todoTitle");


            todoTitle.classList.toggle("line-through");
        });
    });

})

closeTaskButton.addEventListener("click", function () {
    document.getElementById("getTask").style.display = 'none';
});


var labels = document.querySelectorAll("label");

labels.forEach(label => {
    label.addEventListener("click", function () {

        var todoItem = label.closest(".flexTodo");


        var todoTitle = todoItem.querySelector(".todoTitle");


        todoTitle.classList.toggle("line-through");
    });
});



function EditTask(editButton) {
    // Show the task editing modal/form
    getTask.style.display = 'flex';

    // Get the todo item to be edited
    var todoItem = editButton.closest(".flexTodo");
    var todoTitle = todoItem.querySelector(".todoTitle");
    var todoTime = todoItem.querySelector(".todoTime");


    document.getElementById("TaskInput").value = todoTitle
    document.getElementById("TimeInput").value = todoTime


    document.getElementById("addTask").onclick = function () {

        var newTaskValue = document.getElementById("TaskInput").value;
        var newTimeValue = document.getElementById("TimeInput").value;


        todoTitle = newTaskValue;
        todoTime = newTimeValue;


        document.getElementById("TaskInput").value = "";
        document.getElementById("TimeInput").value = "";


        getTask.style.display = 'none';
        editButton.parentNode.previousElementSibling.style.display = 'none'


        document.getElementById("addTask").onclick = null;
    }
}



// progess Bar

// var progressCircle = document.querySelector('.progress-circle');
// var progressText = document.querySelector('.progress-text');
// var total = document.getElementById("total")
// var completed = document.getElementById("completed")


// var checkboxWrappers = document.querySelectorAll(".checkbox-wrapper");


// function updateProgress() {
//     var percent = (parseInt(completed.innerText) / 6) * 100;
//     progressCircle.style.background = `conic-gradient(#af966f ${percent * 3.6}deg, #ddd ${percent * 3.6}deg)`;
//     progressText.textContent = `${Math.round(percent)}%`;
// }


// checkboxWrappers.forEach(wrapper => {
//     var checkbox = wrapper.querySelector("input[type='checkbox']");

//     checkbox.addEventListener("change", function () {
//         if (checkbox.checked) {
//             console.log('Checked:', checkbox.id);
//             completed.innerText = parseInt(completed.innerText) + 1
//             console.log(checkbox.parentElement.parentElement.childNodes[3].childNodes[1].textContent);
//             var li = document.createElement("li")
//             var liText = document.createTextNode(checkbox.parentElement.parentElement.childNodes[3].childNodes[1].textContent)
//             li.appendChild(liText)
//             var completedTask = document.getElementById("completedTask")
//             completedTask.appendChild(li)

//         } else {
//             completed.innerText = parseInt(completed.innerText) - 1
//             console.log(checkbox.parentElement.parentElement.childNodes[3].childNodes[1].textContent);
//             var li = document.createElement("li")
//             var liText = document.createTextNode(checkbox.parentElement.parentElement.childNodes[3].childNodes[1].textContent)
//             li.appendChild(liText)
//             var uncompleteTask = document.getElementById("uncompleteTask")
//             uncompleteTask.appendChild(li)
//         }
//         updateProgress();
//     });
// });
// updateProgress();

var progressCircle = document.querySelector('.progress-circle');
var progressText = document.querySelector('.progress-text');
var completedElement = document.getElementById("completed");
var totalElement = document.getElementById("total");
var completedTaskList = document.getElementById("completedTask");
var uncompleteTaskList = document.getElementById("uncompleteTask");
var checkboxWrappers = document.querySelectorAll(".checkbox-wrapper");

// Initialize total tasks
var totalTasks = parseInt(totalElement.textContent, 10);
var completedTasks = 0;

// Function to update progress bar
function updateProgress() {
    var percent = (completedTasks / totalTasks) * 100;
    progressCircle.style.background = `conic-gradient(#af966f ${percent * 3.6}deg, #ddd ${percent * 3.6}deg)`;
    progressText.textContent = `${Math.round(percent)}%`;
    completedElement.textContent = completedTasks;
}

// Initialize uncomplete tasks
function initializeUncompleteTasks() {
    checkboxWrappers.forEach(wrapper => {
        var checkbox = wrapper.querySelector("input[type='checkbox']");
        var taskTitle = wrapper.closest(".flexTodo").querySelector(".todoTitle").textContent;

        var li = document.createElement("li");
        li.setAttribute("data-checkbox-id", checkbox.id);
        li.textContent = taskTitle;
        uncompleteTaskList.appendChild(li);
    });
}

// Update task lists on checkbox change
function updateTaskLists() {
    checkboxWrappers.forEach(wrapper => {
        var checkbox = wrapper.querySelector("input[type='checkbox']");

        checkbox.addEventListener("change", function () {
            var taskTitle = checkbox.closest(".flexTodo").querySelector(".todoTitle").textContent;

            if (checkbox.checked) {
                completedTasks += 1;
                moveTask(completedTaskList, checkbox.id, taskTitle);
            } else {
                completedTasks -= 1;
                moveTask(uncompleteTaskList, checkbox.id, taskTitle);
            }

            updateProgress();
        });
    });
}

// Move task between lists
function moveTask(targetList, checkboxId, taskTitle) {
    var listItem = targetList.querySelector(`li[data-checkbox-id="${checkboxId}"]`);

    if (!listItem) {
        listItem = document.createElement("li");
        listItem.setAttribute("data-checkbox-id", checkboxId);
    }

    listItem.textContent = taskTitle;
    targetList.appendChild(listItem);

    var oppositeList = targetList === completedTaskList ? uncompleteTaskList : completedTaskList;
    var oppositeListItem = oppositeList.querySelector(`li[data-checkbox-id="${checkboxId}"]`);

    if (oppositeListItem) {
        oppositeList.removeChild(oppositeListItem);
    }
}

// Initialize the application
initializeUncompleteTasks();
updateTaskLists();
updateProgress();


// Calender
var calendar_dates = document.getElementById("calendar-dates");
var Cal_prev = document.getElementById("Cal_prev");
var Cal_next = document.getElementById("Cal_next");
var month_year = document.getElementById("month-year");


var now = new Date();


function calender(date) {
    // Calendar dates container ko clear karna
    calendar_dates.innerHTML = "";
    var year = now.getFullYear();
    var month = now.getMonth();

    // Month aur year ko display karna
    month_year.textContent = `${now.toLocaleString("default", { month: "long" })} ${year}`;


    var currentDay = date.getDate();
    var getday = date.getDay()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(currentDay,days[getday]);


    // Display last few days of previous month
    for (let i = -3; i < 0; i++) {
        let tempDate = new Date(date);
        tempDate.setDate(currentDay + i);
        if (tempDate.getMonth() === month) {
            calendar_dates.innerHTML += `<div>${tempDate.getDate()}</div>`;
        }
    }

    // Display current day with highlighted style
    calendar_dates.innerHTML += `<div class="current-day">${currentDay}</div>`;

    // Display next few days of current month
    for (let i = 1; i <= 3; i++) {
        let tempDate = new Date(date);
        tempDate.setDate(currentDay + i);
        if (tempDate.getMonth() === month) {
            calendar_dates.innerHTML += `<div>${tempDate.getDate()}</div>`;
        }
    }
}


calender(now);