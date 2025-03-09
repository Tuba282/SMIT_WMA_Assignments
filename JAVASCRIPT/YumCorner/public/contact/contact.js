import { initializeTooltips } from "../blog/blog.js";
initializeTooltips();
// ------------------  Navbar ------------------
window.addEventListener("scroll", () => {
  const container = document.getElementById("navbar");
  let scrollY = window.scrollY;
  let triggredHeight = 100;

  if (scrollY > triggredHeight) {
    container.classList.add("changeColor");
  } else {
    container.classList.remove("changeColor");
  }
});
// ------------------  Navbar overLay------------------
const overLay = document.querySelector(".overLay");
const cross = document.getElementById("cross");
const bar = document.getElementById("bar");

bar.addEventListener("click", () => {
  overLay.classList.add("show");
  cross.classList.add("show");
});

cross.addEventListener("click", () => {
  overLay.classList.remove("show");
  cross.classList.remove("show");
});

// ------------------  Date and Month setup------------------
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const now = new Date();
const getDate = now.getDate();
const getMonth = now.getMonth();
const getYear = now.getFullYear();
document
  .querySelectorAll(".month")
  .forEach((ele) => (ele.textContent = months[getMonth]));
document
  .querySelectorAll(".date")
  .forEach((ele) => (ele.textContent = getDate));
document
  .querySelectorAll(".year")
  .forEach((ele) => (ele.textContent = getYear));

// ------------------ Contact  Branches------------------
const branches = [
  {
    city: "Karachi",
    phone: "+92-21-12345678",
    src: "./aseets/imgs/letter-k.png",
    email: "karachi@yumcorner.com",
    location: "123 Karachi Street, Karachi, Pakistan",
  },
  {
    city: "Islamabad",
    phone: "+92-51-12345678",
    src: "./aseets/imgs/letter-i.png",
    email: "islamabad@yumcorner.com",
    location: "456 Islamabad Avenue, Islamabad, Pakistan",
  },
  {
    city: "Rawalpindi",
    phone: "+92-51-87654321",
    src: "./aseets/imgs/letter-r.png",
    email: "rawalpindi@yumcorner.com",
    location: "789 Rawalpindi Road, Rawalpindi, Pakistan",
  },
  {
    city: "Sakhar",
    phone: "+92-71-12345678",
    src: "./aseets/imgs/letter-s.png",
    email: "sakhar@yumcorner.com",
    location: "321 Sakhar Street, Sakhar, Pakistan",
  },
  {
    city: "Quetta",
    phone: "+92-81-12345678",
    src: "./aseets/imgs/letter-q.png",
    email: "quetta@yumcorner.com",
    location: "654 Quetta Boulevard, Quetta, Pakistan",
  },
  {
    city: "Peshawar",
    phone: "+92-91-12345678",
    src: "./aseets/imgs/letter-p.png",
    email: "peshawar@yumcorner.com",
    location: "987 Peshawar Lane, Peshawar, Pakistan",
  },
  {
    city: "Lahore",
    phone: "+92-42-12345678",
    src: "./aseets/imgs/letter-l.png",
    email: "lahore@yumcorner.com",
    location: "111 Lahore Road, Lahore, Pakistan",
  },
  {
    city: "Bahawalpur",
    phone: "+92-62-12345678",
    src: "./aseets/imgs/letter-b.png",
    email: "baha@yumcorner.com",
    location: "222 Bahawalpur Street, Bahawalpur, Pakistan",
  },
  {
    city: "Hyderabad",
    phone: "+92-22-12345678",
    src: "./aseets/imgs/letter-h.png",
    email: "hyder@yumcorner.com",
    location: "333 Hyderabad Avenue, Hyderabad, Pakistan",
  },
  {
    city: "Faisalabad",
    phone: "+92-41-12345678",
    src: "./aseets/imgs/letter-f.png",
    email: "faisalabad@yumcorner.com",
    location: "444 Faisalabad Road, Faisalabad, Pakistan",
  }
];
document.addEventListener("DOMContentLoaded", () => {
  const branchSection = document.getElementById("branchSection");
  branches.forEach((contact) => {
    const branch = document.createElement("div");
    branch.setAttribute("class", "contactbranch");
    branch.innerHTML = `
      <div class="pattern1 branchImg">
        <img src="${contact.src}" width="50" height="50">
      </div>
      <div class="city">${contact.city}</div>
      <div class="phone"><span>Phone</span> : ${contact.phone}</div>
      <div class="email"><span>Email</span> : ${contact.email}</div>
      <div class="location"><span>Location</span> : ${contact.location}</div>
  `;
    branchSection.appendChild(branch);
  });
});

// ------------------ Email.js Functionality ------------------

(function () {
  emailjs.init("5dAeqPFiCwj4b6OMO"); // Your Public Key
})();

document.querySelector('.contactForm form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the email using Email.js
  emailjs.sendForm('yumCorner-3767', 'template_k97p25b', this) // 'this' refers to the form element
    .then(function (response) {
      Toastify({
      text: 'Your message has been sent successfully!',
      duration: 1500,
      delay: 1000,
      gravity: "top",
      position: "center",
      backgroundColor: "#daa13e",
      color: "var(--darkGreen)",
      className: "toastify-center",
      avatar: "./aseets/imgs/user-Authorize.png",
    }).showToast();
    }, function (error) {
      Toastify({
      text: 'Oops! Something went wrong. Please try again.',
      duration: 1500,
      delay: 1000,
      gravity: "top",
      position: "center",
      backgroundColor: "#daa13e",
      color: "var(--darkGreen)",
      className: "toastify-center",
      avatar: "./aseets/imgs/user-Unauthorize.png",
    }).showToast();
    });
});
