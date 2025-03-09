import { initializeTooltips } from "./blog/blog.js";
import { recipes } from "./fetchApi.js";
initializeTooltips();
document.addEventListener("DOMContentLoaded", () => {
  // ------------------ 1. Navbar ------------------
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
  // ------------------ 2. Navbar overLay------------------
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

  // ------------------ 3. Food Card Data------------------
  const foodCards = [
    {
      dishName: "Herb Chicken",
      dishText:
        "A succulent herb-marinated chicken dish that delights with every bite.",
      imgSrc:
        "https://simply-delicious-food.com/wp-content/uploads/2019/05/lemon-herb-grilled-chicken-breast-3.jpg",
    },
    {
      dishName: "Tofu Salad",
      dishText:
        "A fresh and vibrant salad featuring crispy tofu and garden vegetables.",
      imgSrc:
        "https://feedmephoebe.com/wp-content/uploads/2022/04/Oven-Baked-Crispy-Tofu-Recipe-with-Salad-and-Creamy-Lemon-Poppy-Dressing-Vegan-Gluten-Free-Healthy-11.jpg",
    },
    {
      dishName: "Herb Chicken",
      dishText:
        "Tender steak bites seared to perfection and served with a savory dip.",
      imgSrc:
        "https://www.andiemitchell.com/wp-content/uploads/2019/04/lemon_herb_marinated_grilled_chicken_recipe-1.jpg",
    },
    {
      dishName: "Veggie Wrap",
      dishText:
        "A healthy and delicious wrap filled with fresh veggies and hummus.",
      imgSrc:
        "https://tastesbetterfromscratch.com/wp-content/uploads/2014/04/Veggie-Wrap-2.jpg",
    },
    {
      dishName: "Herb Chicken",
      dishText:
        "Classic tuna sushi rolls, expertly prepared and bursting with flavor.",
      imgSrc:
        "https://www.eatingwell.com/thmb/upst6ydvrAITWRwB4u3hL_O2btg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5177922-ad507ccfe07d491eba9ad48c0ea8e114.jpg",
    },
    {
      dishName: "Beef Tacos",
      dishText:
        "Juicy beef tacos topped with lettuce, cheese, and a zesty salsa.",
      imgSrc:
        "https://natashaskitchen.com/wp-content/uploads/2016/06/Beef-Tacos-with-Mango-Salsa-7.jpg",
    },
    {
      dishName: "Curry Bowl",
      dishText:
        "A rich and flavorful curry bowl that offers a taste of tradition.",
      imgSrc:
        "https://littlespicejar.com/wp-content/uploads/2016/09/20-Minute-Chicken-Panang-Curry-Noodle-Bowls-6.jpg",
    },
    {
      dishName: "Tofu Salad",
      dishText:
        "Crispy battered fish served with golden fries and tartar sauce.",
      imgSrc:
        "https://www.eatingwell.com/thmb/W-O6L0xyM5egidghuVihfPsPq5M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marinated-tofu-salad-2000-9fcf3cfc732b46889534aed6956d8684.jpg",
    },
    {
      dishName: "Beef Tacos",
      dishText:
        "Spiced lamb kebabs grilled to perfection and served with yogurt dip.",
      imgSrc:
        "https://feelgoodfoodie.net/wp-content/uploads/2024/04/Ground-Beef-Tacos-TIMG.jpg",
    },
    {
      dishName: "Tofu Salad",
      dishText:
        "A refreshing fruit salad made with a medley of seasonal fruits.",
      imgSrc:
        "https://thestingyvegan.com/wp-content/uploads/2021/12/tofu-salad-image.jpg",
    },
  ];
  // ------------------ 4. Food Card Generate HTML------------------
  const generateFoodCard = (data) => {
    return `
            <div class="card" style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.recipeImg})no-repeat;background-position: left center;background-size: cover;">
              <div class="cardIcons">
                <p class="starP">
                  <img src="./aseets/icons/star.png" width="20" class="star" height="20">
                  <span class="upStart">0</span>
                </p>
                <p class="heartEmpty"><img src="./aseets/icons/heartEmpty.png" width="20 "  height="20"></p>
                <p class="heartFull" ><img src="./aseets/icons/heartFull.png" width="20" height="20"></p>
                <p class="share" data-recipe="${data.recipeTitle}" data-url="${data.recipeVideoUrl}"><img src="./aseets/icons/share.png" width="20" height="20"></p>
              </div>
              <div class="cardText">
                <p class="dish">${data.recipeTitle}</p>
                <p class="dishText">${data.shortDescription}</p>
                <p class="tubaName">By Tuba Jan 
                  <span class="month">Dec</span>
                  <span class="date">15</span>
                  <span class="year">2000</span>
                </p>
              </div>
            </div>
        `;
  };
  const foodCardDiv = document.querySelector("#foodCardDiv");
  const cardsHTML = recipes.map(generateFoodCard).join("");
  foodCardDiv.innerHTML = cardsHTML;

  // ------------------ 5. Date and Month setup------------------
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

  // ------------------ 8. Filter Functionality------------------

  window.filterCards = (value) => {
    console.log("Filter function called with value:", value); // Debugging ke liye

    if (value === "all") {
      foodCardDiv.innerHTML = recipes.map(generateFoodCard).join("");
    } else {
      const filteredData = recipes.filter(
        (item) =>
          Array.isArray(item.dishCountry) &&
          item.dishCountry.some(
            (c) => c.trim().toLowerCase() === value.trim().toLowerCase()
          )
      );

      console.log("Filtered Data:", filteredData); // Check karein ke sahi data match ho raha hai ya nahi

      if (filteredData.length > 0) {
        foodCardDiv.innerHTML = filteredData.map(generateFoodCard).join("");
      } else {
        foodCardDiv.innerHTML = "<p>No recipes found!</p>";
      }
    }
  };

  const categoriesData = () => {
    const categoriesDiv = document.querySelector(".categories");

    // Sare unique country names extract karne ke liye
    const tags = [
      ...new Set(
        recipes.flatMap((recipe) =>
          recipe.dishCountry.map((c) => c.trim().toLowerCase())
        )
      ),
    ];

    console.log("Unique Tags:", tags); // Debugging ke liye

    tags.forEach((tag) => {
      const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1); // First letter capital
      const category = document.createElement("p");
      category.setAttribute("data-filter", formattedTag);
      category.innerHTML = `<span>${formattedTag}</span>`;
      category.addEventListener("click", () => {
        console.log("Filtering:", formattedTag);
        filterCards(tag.toLowerCase());
      });
      categoriesDiv.appendChild(category);
    });
  };

  categoriesData();
  filterCards("all");

  // ------------------ 6. Star, Heart, Share Functionality------------------

  const stars = document.querySelectorAll(".star");
  const share = document.querySelectorAll(".share");
  const heartsEmpty = document.querySelectorAll(".heartEmpty");
  const heartsFull = document.querySelectorAll(".heartFull");

  stars.forEach((star, ind) => {
    let count = 0;
    star.addEventListener("click", () => {
      count += 1;
      let counter = document.querySelectorAll(".upStart")[ind];
      counter.textContent = count;
    });
  });

  heartsEmpty.forEach((heart, ind) => {
    heart.addEventListener("click", () => {
      heartsFull[ind].style.display = "grid";
      heart.style.display = "none";
    });
  });

  heartsFull.forEach((heart, ind) => {
    heart.addEventListener("click", () => {
      heartsEmpty[ind].style.display = "grid";
      heart.style.display = "none";
    });
  });
  share.forEach((button) => {
    button.addEventListener("click", () => {
      const recipeName = button.getAttribute("data-recipe");
      const recipeUrl = button.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeName}`,
            url: recipeUrl,
          })
          .then(() => {
            Toastify({
              text: "Thanks for sharing!",
              duration: 1500,
              gravity: "top",
              position: "center",
              backgroundColor: "#daa13e",
              color: "var(--green)",
              className: "toastify-center",
              avatar: "./aseets/imgs/thumbsup.png",
            }).showToast();
          })
          .catch(console.error);
      } else {
        console.log("Share not supported on this browser.");
      }
    });
  });
});

// ------------------ 9. AOS------------------
// AOS.init({
//     duration: 1500,
//     delay:0,
// });

window.reservationForm = (e) => {
  e.preventDefault();

  const reservedNameInput = document
    .getElementById("reservedNameInput")
    .value.trim();
  const reservedPhoneInput = document
    .getElementById("reservedPhoneInput")
    .value.trim();
  const reservedEmailInput = document
    .getElementById("reservedEmailInput")
    .value.trim();
  const reservedDateInput = document
    .getElementById("reservedDateInput")
    .value.trim();
  const reservedTimeInput = document
    .getElementById("reservedTimeInput")
    .value.trim();
  const reservedNoInput = document
    .getElementById("reservedNoInput")
    .value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("dateError").textContent = "";
  document.getElementById("timeError").textContent = "";
  document.getElementById("guestError").textContent = "";

  let isValid = true;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(reservedEmailInput)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (reservedNameInput.length < 4) {
    document.getElementById("nameError").textContent =
      "Name must be at least 4 characters long.";
    isValid = false;
  }

  if (reservedPhoneInput.length > 11) {
    document.getElementById("phoneError").textContent =
      "Phone number should be 11 digits long.";
    isValid = false;
  }

  if (reservedNoInput === "" || reservedNoInput == 0) {
    document.getElementById("guestError").textContent =
      "Please enter a valid number of guests.";
    isValid = false;
  }

  if (reservedDateInput === "") {
    document.getElementById("dateError").textContent = "Please select a date.";
    isValid = false;
  }

  if (reservedTimeInput === "") {
    document.getElementById("timeError").textContent = "Please select a time.";
    isValid = false;
  }
  if (isValid) {
    localStorage.setItem("reservedNameInput", reservedNameInput);
    localStorage.setItem("reservedPhoneInput", reservedPhoneInput);
    localStorage.setItem("reservedEmailInput", reservedEmailInput);
    localStorage.setItem("reservedDateInput", reservedDateInput);
    localStorage.setItem("reservedTimeInput", reservedTimeInput);
    localStorage.setItem("reservedNoInput", reservedNoInput);

    const reservedDone = document.querySelector("#reservedDone");
    const reserved = document.querySelector(".reserved");
    reservedDone.style.display = "flex";

    document.getElementById("reservedName").textContent = reservedNameInput;
  document.getElementById("reservedEmail").textContent = reservedEmailInput;
  document.getElementById("reservedPhone").textContent = reservedPhoneInput;
  document.getElementById("reservedDate").textContent = reservedDateInput;
  document.getElementById("reservedTime").textContent = reservedTimeInput;
  document.getElementById("reservedNo").textContent = reservedNoInput;

    setTimeout(() => {
      reserved.style.display = "flex";
      reservedDone.style.display = "none";
      setTimeout(() => {
        reserved.style.display = "none";
      }, 3000);
    }, 2000);

    document.getElementById("reservationForm").reset();
  }
};

// ------------------ 11. Team memebrs Data------------------
const teamMembers = [
  {
    name: "Emma Roberts",
    disp: "Emma is a culinary wizard specializing in Italian cuisine. She brings authenticity and flair to every dish she creates.",
    img: "./aseets/imgs/chef-5.png",
  },
  {
    name: "James Bennett",
    disp: "James is a master of the grill, turning simple ingredients into smoky, savory masterpieces that delight our guests.",
    img: "./aseets/imgs/chef-3.png",
  },
  {
    name: "Sophia Clark",
    disp: "Sophia is a seasoned chef with expertise in Asian cuisine. His dishes are a harmonious blend of spices and flavors, offering a unique dining experience.",
    img: "./aseets/imgs/chef-1.png",
  },
  {
    name: "Liam Johnson",
    disp: "Specializing in seafood, Liam ensures that every fish and shellfish is prepared to perfection, bringing the taste of the ocean to your plate.",
    img: "./aseets/imgs/chef-4.png",
  },
  {
    name: "Olivia Thompson",
    disp: "Olivia has a knack for fusion dishes, blending flavors from different cultures to create something entirely new and exciting.",
    img: "./aseets/imgs/chef-2.png",
  },
];

const team = document.getElementById("team");
function generateTeamSlider(arr) {
  return `
            <div class="swiper-slide teamMember">
                <img src="${arr.img}" class="teamImg" />
                <h4>${arr.name}</h4>
                <p>${arr.disp}</p>
            </div>
    `;
}
const teamHTML = teamMembers.map(generateTeamSlider).join("");
team.innerHTML = teamHTML;

// ------------------ 12. sharing------------------
