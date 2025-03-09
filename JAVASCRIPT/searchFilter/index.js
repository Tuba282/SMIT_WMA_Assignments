
AOS.init();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx loader show-up


let loader = document.getElementById("loader")
let loginPage = document.getElementById("login-page")
window.addEventListener("load", () => {
    loader.style.display = "flex"
    loginPage.style.display = "none"
    setTimeout(() => {
        loader.style.display = "none"
        loginPage.style.display = "flex"
    }, 4000)
})


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLogin Ul


let loginLi = document.getElementById("loginLi")
let LoginLiText = [
    'Discover a diverse range of products.',
    'Top quality on all our products.',
    'Enjoy exclusive deals and  discounts.'
]
for (let j = 0; j < LoginLiText.length; j++) {
    let li = document.createElement("li")
    let i = document.createElement("i")
    i.setAttribute("class", "fa-solid fa-check-double")
    i.style.color = "#ffffff"
    let liText = document.createTextNode(LoginLiText[j])
    li.appendChild(i)
    li.appendChild(liText)

    loginLi.appendChild(li)
}


// xxxxxxxxxxxxxxxxxxxxxxxxxx loginForm

// Form validation
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("nameError").textContent = "";

    let isValid = true; 

    
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userName = document.getElementById("userName").value;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userEmail)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false; 
    }

    // Password validation
    if (userPassword.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Confirm password validation
    if (userPassword !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // Mobile validation
    if (userName.length < 6) {
        document.getElementById("nameError").textContent = "Name should be at least 6 characters long.";
        isValid = false;
    }

    if (isValid) {
        // Store userName and gender in localStorage
        localStorage.setItem('userName', userName);
        const gender = document.querySelector('input[name="gender"]:checked').value;
        localStorage.setItem('userGender', gender);

        document.querySelector(".formClearBox").style.display = 'block';

        setTimeout(() => {
            document.querySelector(".formClearBox").style.display = 'none';
            window.location.href = "./dashboard.html";
        }, 2000);
    }
});


