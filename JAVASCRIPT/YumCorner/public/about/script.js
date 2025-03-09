import {initializeTooltips} from "../blog/blog.js"
initializeTooltips()
// ------------------ 1. Navbar ------------------
window.addEventListener("scroll", () => {
  const container = document.getElementById('navbar');
  let scrollY = window.scrollY;
  let triggredHeight = 100;

  if (scrollY > triggredHeight) {
    container.classList.add('changeColor');
  } else {
    container.classList.remove('changeColor');
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
// ------------------ 3. Special Offer------------------

let offerData = [
  {
    name: "Pizza Mondays",
    heading: "$12 PIZZAS & $6 WINES",
    description:
      "Pizza is a traditional dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
    image:
      "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-1.png",
  },
  {
    name: "Burger Tuesdays",
    heading: "$12 BURGERS & $6 PINTS",
    description:
      "A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be >pan fried, barbecued, or flame broiled",
    image:
      "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-2.png",
  },
  {
    name: "Ocean Wise Fish",
    heading: "$16 FISH & CHIPS",
    description:
      "Fish and chips is a hot dish of English origin consisting of fried battered fish and hot potato chips. It is a common take-away food and an early example of culinary fusion.",
    image:
      "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-3.png",
  },
  {
    name: "East Coast",
    heading: "$12 MUSSELS & $6 PINTS",
    description:
      "Steaming fresh 'moules' make the perfect sharing bowl - flavour with sweet cider, herbs and garlic.",
    image:
      "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png",
  },
];

let offerDiv = document.createElement("div");
offerDiv.setAttribute("class", "offerDiv");

let offer = document.querySelector(".offer");
offerDiv.innerHTML = `
        <div class="swiper-wrapper ">
               <div class="swiper-slide offerDiv">
                <div class="options">
                    <p class="item" onClick="firstOffer()">${offerData[0].name}</p>
                    <p class="item" onClick="secondOffer()">${offerData[1].name}</p>                  
                    <p class="item" onClick="thirdOffer()">${offerData[2].name}</p>
                    <p class="item" onClick="forthOffer()">${offerData[3].name}</p>
                </div>
                <div class="img">
                  <img
                    src="${offerData[0].image}"
                  />
                </div>
              </div>
            </div>
`;
console.log(offerDiv);

// Attach functions to the global window object
window.firstOffer = function () {
  offerDiv.innerHTML = `
        <div class="swiper-wrapper">
               <div class="swiper-slide offerDiv">
                <div class="options">
                    <p class="item" onClick="firstOffer()">${offerData[0].name}</p>
                    <p class="item" onClick="secondOffer()">${offerData[1].name}</p>                  
                    <p class="item" onClick="thirdOffer()">${offerData[2].name}</p>
                    <p class="item" onClick="forthOffer()">${offerData[3].name}</p>
                </div>
                <div class="img">
                  <img
                    src="${offerData[0].image}"
                  />
                </div>
              </div>
            </div>
  `;
};

window.secondOffer = function () {
  offerDiv.innerHTML = `
        <div class="swiper-wrapper">
               <div class="swiper-slide offerDiv">
                <div class="options">
                    <p class="item" onClick="firstOffer()">${offerData[0].name}</p>
                    <p class="item" onClick="secondOffer()">${offerData[1].name}</p>                  
                    <p class="item" onClick="thirdOffer()">${offerData[2].name}</p>
                    <p class="item" onClick="forthOffer()">${offerData[3].name}</p>
                </div>
                <div class="img">
                  <img
                    src="${offerData[1].image}"
                  />
                </div>
              </div>
            </div>
  `;
};

window.thirdOffer = function () {
  offerDiv.innerHTML = `
        <div class="swiper-wrapper ">
               <div class="swiper-slide offerDiv">
                <div class="options">
                    <p class="item" onClick="firstOffer()">${offerData[0].name}</p>
                    <p class="item" onClick="secondOffer()">${offerData[1].name}</p>                  
                    <p class="item" onClick="thirdOffer()">${offerData[2].name}</p>
                    <p class="item" onClick="forthOffer()">${offerData[3].name}</p>
                </div>
                <div class="img">
                  <img
                    src="${offerData[2].image}"
                  />
                </div>
              </div>
            </div>
  `;
};

window.forthOffer = function () {
  offerDiv.innerHTML = `
        <div class="swiper-wrapper ">
               <div class="swiper-slide offerDiv">
                <div class="options">
                    <p class="item" onClick="firstOffer()">${offerData[0].name}</p>
                    <p class="item" onClick="secondOffer()">${offerData[1].name}</p>                  
                    <p class="item" onClick="thirdOffer()">${offerData[2].name}</p>
                    <p class="item" onClick="forthOffer()">${offerData[3].name}</p>
                </div>
                <div class="img">
                  <img
                    src="${offerData[3].image}"
                  />
                </div>
              </div>
            </div>
  `;
};

offer.appendChild(offerDiv);


// ------------------ 4. about card data------------------
const AboutCarddata = [
  {
    title: "Quality Ingredients",
    text: "We use only the freshest, locally sourced ingredients to ensure every dish is a taste sensation.",
    img: "./aseets/imgs/aboutCard-1.png"
  },
  {
    title: "Expert Chefs",
    text: "Our team of world-class chefs crafts each dish with passion and precision to delight your palate.",
    img: "./aseets/imgs/aboutCard-2.png"
  },
  {
    title: "Sustainable Practices",
    text: "Committed to reducing our environmental footprint by adopting eco-friendly practices and materials.",
    img: "./aseets/imgs/aboutCard-3.png"
  },
  {
    title: "Community Engagement",
    text: "We believe in giving back to our community through various local initiatives and support programs.",
    img: "./aseets/imgs/aboutCard-4.png"
  },
  {
    title: "Customer Satisfaction",
    text: "Our priority is to provide an exceptional dining experience, ensuring every customer leaves happy.",
    img: "./aseets/imgs/aboutCard-5.png"
  },
  {
    title: "Innovative Dishes",
    text: "Exploring new flavors and techniques to bring you innovative dishes that excite your taste buds.",
    img: "./aseets/imgs/aboutCard-6.png"
  },
  {
    title: "Diverse Menu",
    text: "Offering a diverse menu that caters to all dietary preferences, including vegan and gluten-free options.",
    img: "./aseets/imgs/aboutCard-7.png"
  },
  {
    title: "Warm Ambiance",
    text: "Enjoy your meal in a cozy, inviting atmosphere designed for comfort and relaxation with your loved ones.",
    img: "./aseets/imgs/aboutCard-8.png"
  },
  {
    title: "Authentic Recipes",
    text: "Our chefs use traditional methods and authentic recipes to ensure a genuine dining experience.",
    img: "./aseets/imgs/aboutCard-9.png"
  }
];

const cardSection = document.getElementById("cardSection")
// AboutCarddata.map((ele, ind) => {

//   const aboutCard = document.createElement("div");
//   aboutCard.classList.add("aboutcard")
//   aboutCard.innerHTML = `
//             <div class="pattern1 cardImg">
//               <img src="${ele.img}" width="20" height="20">
//             </div>
//             <div class="title">${ele.title}</div>
//             <div class="desp">${ele.text}</div>
//   `;
//   cardSection.appendChild(aboutCard)
// })
AboutCarddata.forEach(ele=>{
  const aboutCard = document.createElement("div");
  aboutCard.classList.add("aboutcard")
  aboutCard.innerHTML = `
            <div class="pattern1 cardImg">
              <img src="${ele.img}" width="20" height="20">
            </div>
            <div class="title">${ele.title}</div>
            <div class="desp">${ele.text}</div>
  `;
  cardSection.appendChild(aboutCard)
})
// ------------------ 5. choose section------------------
const cooseCardData = [
  {
    name: "Steak",
    img: "./aseets/imgs/chooseCardImg-1.png",
    divs: [
      { bigText: "Sake BBQ Sause", price: "$ 19.2", shortText: "Peach Preserves,clove Garlic, Hot Sauce." },
      { bigText: "Oven Roasted BBQ", price: "$ 15.8", shortText: "Louis-Style Ribs or Baby Back Ribs." },
      { bigText: "BBQ Beef Brisket", price: "$ 12.4", shortText: "red onion, finely chopped, Hot Sauce." }
    ]
  },
  {
    name: "Burger",
    img: "./aseets/imgs/chooseCardImg-2.png",
    divs: [
      { bigText: "Burger Salad", price: "$ 12.4", shortText: "pound ground beef ,Avocado oil cooking." },
      { bigText: "Chile turkey burger", price: "$ 8.12", shortText: "cup chopped red onions,splash Sriracha sauce." },
      { bigText: "Chicken tikka burger", price: "$ 20.4", shortText: "small chicken breasts, with burger buns." }
    ]
  },
  {
    name: "Coffee",
    img: "./aseets/imgs/chooseCardImg-3.png",
    divs: [
      { bigText: "Turkish Coffee", price: "$ 20.1", shortText: "small coffee cups of water, scoops of coffee." },
      { bigText: "Coffee granita", price: "$ 17.4", shortText: "freshly brewed, strong black coffee, golden sugar." },
      { bigText: "Swedish Egg Coffee", price: "$ 8.4", shortText: "dark-roast ground Vietnamese Coffee with Chicory." }
    ]
  },
  {
    name: "Dessert",
    img: "./aseets/imgs/chooseCardImg-4.png",
    divs: [
      { bigText: "Dessert-Wine-Poached", price: "$ 19.2", shortText: "beurre bosc pears,vanilla bean and scraped." },
      { bigText: "Cherry, almond & mascarpone", price: "$ 12.7", shortText: "block dessert pastry, about cherries, stoned." },
      { bigText: "Frozen Chocolate-Coconut", price: "$ 20.4", shortText: "chocolate-coconut frozen dessert, strawberries." }
    ]
  }
];

function displayCardData(name) {
  const choose = document.getElementById("choose");
  const previousSection = document.querySelector(".chooseSection");
  if (previousSection) {
    choose.removeChild(previousSection);
  }

  const data = cooseCardData.find(item => item.name === name);
  if (data) {
    const chooseSection = document.createElement("div");
    chooseSection.classList.add("chooseSection");
    chooseSection.innerHTML = `
    <div class="chooseSection">
    <img class="chooseImg" src="${data.img}"/>
    <div class="chooseList">
    <h3>${data.name}</h3>
    ${data.divs.map(div => `
      <div>
      <p>
      <span class="bold">${div.bigText}</span>
                <span class="colored">${div.price}</span>
              </p>
              <span>${div.shortText}</span>
            </div>
            <br>
            `).join('')}
            </div>
            </div>
            `;
    choose.appendChild(chooseSection);
  }
}


["Steak", "Burger", "Coffee", "Dessert"].forEach(item => {
  document.getElementById(item).addEventListener("click", () => displayCardData(item));
});
// ------------------ 6. Date and Month setup------------------
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const now = new Date();
const getDate = now.getDate();
const getMonth = now.getMonth();
const getYear = now.getFullYear();
document.querySelectorAll(".month").forEach(ele => ele.textContent = months[getMonth]);
document.querySelectorAll(".date").forEach(ele => ele.textContent = getDate);
document.querySelectorAll(".year").forEach(ele => ele.textContent = getYear);


// ------------------ 7. menuList section ------------------

const menuList = document.getElementById("menuList");
const showMenuButtons = document.querySelectorAll(".showMenu");

showMenuButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (menuList.style.display == "block") {
      menuList.style.display = "none";
      // document.getElementById("menuList").scrollIntoView({ behavior: "smooth" });
      document.getElementById("showMenu").firstElementChild.textContent = "View More";
      document.querySelector(".downGif").style.transform = "rotate(0deg)";
    } else {
      menuList.style.display = "block";
      // document.getElementById("menuList").scrollIntoView({ behavior: "smooth" });
      document.getElementById("showMenu").firstElementChild.textContent = "View Less";
      document.querySelector(".downGif").style.transform = "rotate(180deg)";
    }
  });
});
