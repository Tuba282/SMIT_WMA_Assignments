import  fetchApi from "../fetchApi.js"
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

// ------------------  tooltips ------------------
export function initializeTooltips() {
  const classes = document.querySelectorAll(
    ".google, .linkedin, .facebook, .tiktok"
  );
  classes.forEach((cls) => {
    const classContent = cls.classList.contains("google")
      ? "Google"
      : cls.classList.contains("linkedin")
      ? "Linkedin"
      : cls.classList.contains("facebook")
      ? "Facebook"
      : cls.classList.contains("tiktok")
      ? "Twiter"
      : "";
    tippy(cls, {
      content: classContent,
      theme: "light",
    });
  });
}
initializeTooltips();
// ------------------  explore ------------------

function mediaControl() {
  const expMainDiv = document.querySelector(".expMainDiv");
  const expDiv_1 = document.querySelector(".expDiv-1");
  const expDiv_2 = document.querySelector(".expDiv-2");

  function resetLayout() {
    expMainDiv.classList.remove("basic", "topToBottom", "alternate");
    expDiv_1.classList.remove("basic", "topToBottom", "alternate");
    expDiv_2.classList.remove("basic", "topToBottom", "alternate");
  }

  function basic() {
    resetLayout();
    expMainDiv.style.flexDirection = "column";
    expDiv_1.style.flexDirection = "row";
    expDiv_2.style.flexDirection = "row";
    expDiv_2.style.marginTop = "0em";
    expDiv_1.querySelector(".text").style.width = "50%";
    expDiv_1.querySelector(".img").style.width = "50%";
    expDiv_2.querySelector(".text").style.width = "50%";
    expDiv_2.querySelector(".img").style.width = "50%";
  }

  function sidebySide() {
    resetLayout();
    expMainDiv.style.flexDirection = "row";
    expDiv_1.style.flexDirection = "column";
    expDiv_2.style.flexDirection = "column";
    expDiv_2.style.marginTop = "14em";
    expDiv_1.style.marginTop = "11em";
    expDiv_1.querySelector(".text").style.width = "100% !important";
    expDiv_1.querySelector(".img").style.width = "100% !important";
    expDiv_2.querySelector(".text").style.width = "100% !important";
    expDiv_2.querySelector(".img").style.width = "100% !important";
  }

  function topToBottom() {
    resetLayout();
    expDiv_1.style.flexDirection = "column";
    expDiv_2.style.flexDirection = "column";
    expDiv_1.style.textAlign = "center";
    expDiv_2.style.textAlign = "center";
  }

  function alternate() {
    resetLayout();
    expDiv_2.style.flexDirection = "row-reverse";
  }

  window.basic = basic;
  window.sidebySide = sidebySide;
  window.topToBottom = topToBottom;
  window.alternate = alternate;
}

mediaControl();

// ------------------  Swiper ------------------
async function displayRecipes() {
  const recipes = await fetchApi();
  const slider = document.getElementById("slider");

  recipes.forEach((recipe) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "swiperSlide");
    slide.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${recipe.image}) no-repeat center center/cover`;

    slide.innerHTML = `
            <div class="name">${recipe.name}</div>
        `;

    slider?.appendChild(slide);
  });
  new Swiper(".swiperSlider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
    },
    freeMode: true,
  });
}

displayRecipes();

// ------------------  Reviews ------------------

document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      num: 9.4,
      reviewer: "John Anderson",
      review:
        "YumCorner has completely transformed my cooking experience. The detailed recipes and helpful tips have made it so easy to create delicious meals at home. My family is always impressed with the new dishes I try, thanks to YumCorner's extensive collection of recipes and ideas.",
    },
    {
      num: 5.2,
      reviewer: "Emily Johnson",
      review:
        "I've been using YumCorner for a while now, and it's been a fantastic resource. The variety of cuisines and the step-by-step instructions ensure that I can explore new flavors and techniques with confidence. Each recipe I've tried has been a hit, and I love discovering new favorites!",
    },
    {
      num: 3.6,
      reviewer: "Michael Brown",
      review:
        "YumCorner is my go-to website for all things culinary. From quick weeknight dinners to elaborate weekend feasts, the recipes are always reliable and delicious. The community reviews and ratings help me choose the best dishes, and I appreciate the thoughtful insights from fellow food lovers.",
    },
    {
      num: 8.4,
      reviewer: "Sophia Davis",
      review:
        "The recipes on YumCorner are truly exceptional. I appreciate the attention to detail and the clear instructions that make even complex dishes approachable. Whether I'm cooking for myself or hosting a dinner party, YumCorner always provides inspiration and guidance for delicious meals.",
    },
    {
      num: 4.1,
      reviewer: "David Wilson",
      review:
        "YumCorner has become an essential part of my kitchen routine. The variety of recipes means there's always something new to try, and the quality of the content is unmatched. I've recommended YumCorner to all my friends and family, and they love it just as much as I do!",
    },
  ];

  const reviewStars = document.getElementById("reviewStars");

  reviews.forEach((review) => {
    const slide = document.createElement("div");
    slide.setAttribute("class", "swiper-slide stars");
    slide.innerHTML = `
              <div class="starDiv-1"></div>
              <div class="starDiv-2">
                <div class="starDiv">
                  <div class="num">
                    ${review.num}
                    <span>Based on 500+ reviews</span>
                  </div>
                  <br />
                  <div class="starReview">
                    <div class="filledStars">
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="progressBar">
                      <span class="bar-1"></span>
                      <span class="bar-2"></span>
                    </div>
                    <div class="percents">95%</div>
                  </div>

                  <div class="starReview">
                    <div class="filledStars">
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="progressBar">
                      <span class="bar-1"></span>
                      <span class="bar-2 bar-3"></span>
                    </div>
                    <div class="percents">70%</div>
                  </div>

                  <div class="starReview">
                    <div class="filledStars">
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starFill.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="progressBar">
                      <span class="bar-1"></span>
                      <span class="bar-2 bar-4"></span>
                    </div>
                    <div class="percents">35%</div>
                  </div>

                  <div class="starReview">
                    <div class="filledStars">
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="progressBar">
                      <span class="bar-1"></span>
                    </div>
                    <div class="percents">0%</div>
                  </div>

                  <div class="starReview">
                    <div class="filledStars">
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                      <img
                        src="./aseets/imgs/starEmpty.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="progressBar">
                      <span class="bar-1"></span>
                    </div>
                    <div class="percents">0%</div>
                  </div>
                </div>
                <div class="reviewDiv">
                  <div class="filledStars">
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="40"
                      height="40"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="40"
                      height="40"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="40"
                      height="40"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="40"
                      height="40"
                    />
                    <img
                      src="./aseets/imgs/starFill.png"
                      width="40"
                      height="40"
                    />
                  </div>
                  <p class="text">
                    ${review.review}
                  </p>
                  <div class="userName">${review.reviewer}</div>
                </div>
              </div>
    `;
    reviewStars?.appendChild(slide);
  });

  new Swiper(".starSection", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});

// ------------------  chef Section functionality ------------------
const chefData = [
  {
    img: "./aseets/imgs/chefImg-1.png",
    title: "Expertise in Culinary Techniques",
    description:
      "Our chefs are well-versed in various culinary techniques, ensuring that each dish is prepared to perfection. They have years of experience working in top restaurants.",
  },
  {
    img: "./aseets/imgs/chefImg-2.png",
    title: "Passion for Innovation",
    description:
      "Innovation is key in our kitchen. Our chefs continuously experiment with new ingredients and recipes to bring you unique and exciting dishes.",
  },
  {
    img: "./aseets/imgs/chefImg-3.png",
    title: "Commitment to Quality",
    description:
      "Quality is our top priority. Our chefs meticulously select the freshest and highest-quality ingredients to create delicious and nutritious meals.",
  },
  {
    img: "./aseets/imgs/chefImg-4.png",
    title: "Attention to Detail",
    description:
      "Every detail matters. Our chefs ensure that every dish is not only tasty but also beautifully presented, making your dining experience memorable.",
  },
  // {
  //   img: "chef-quality5.jpg",
  //   title: "Customer-Focused Approach",
  //   description:
  //     "Our chefs are dedicated to providing exceptional customer service. They listen to your feedback and continuously strive to exceed your expectations.",
  // },,
  // {
  //   img: "chef-quality3.jpg",
  //   title: "Commitment to Quality",
  //   description:
  //     "Quality is our top priority. Our chefs meticulously select the freshest and highest-quality ingredients to create delicious and nutritious meals.",
  // }
];
const chefSection = document.getElementById("chefSection");
chefData.forEach((chef, ind) => {
  const chefCard = document.createElement("div");
  chefCard.className = `specialCard specialCard-${ind}`;
  chefCard.innerHTML = `
              <img
                src="${chef.img}"
                width="100"
                height="100"
              />
              <h4>${chef.title}</h4>
              <p>
                <span class="specialSpan">
                ${chef.description}
              </p>
  `;
  chefSection?.appendChild(chefCard);
});
// ------------------  Faq section functionality ------------------

const faqs = [
  {
    question: "What types of food does YumCorner offer?",
    answer:
      "YumCorner offers a variety of delicious cuisines including fast food, traditional dishes, desserts, and beverages.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order through our website or by using our mobile app. Simply browse the menu, add items to your cart, and proceed to checkout.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we offer home delivery services within specified areas. Please enter your location on our website to check if delivery is available in your area.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, mobile payments, and cash on delivery.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order status through our website or mobile app. You will receive updates at each stage of the delivery process.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes, we offer a loyalty program where you can earn points on every order. Points can be redeemed for discounts on future purchases.",
  },
  {
    question: "Are there any vegetarian or vegan options?",
    answer:
      "Yes, we have a selection of vegetarian and vegan dishes available. You can filter the menu to view these options.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our operating hours are from 10:00 AM to 11:00 PM, seven days a week.",
  },
  {
    question: "Can I make a reservation for dine-in?",
    answer:
      "Yes, you can make a reservation for dine-in through our website or by calling our customer service.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@yumcornerfood.com or by calling our helpline at +92-123-456789.",
  },
];

const row1Div = document.querySelector(".row-1");
const row2Div = document.querySelector(".row-2");

const faqSection = () => {
  faqs.forEach((faq, index) => {
    const question = document.createElement("div");
    question.className = "question";
    question.innerHTML = `
      <div class="que">
        <p>${faq.question}</p>
        <img src="./aseets/imgs/downArrow.png" width="20" height="20" />
      </div>
      <div class="ans">
        <p>${faq.answer}</p>
      </div>
    `;
    if (index % 2 === 0) {
      row1Div?.appendChild(question);
    } else {
      row2Div?.appendChild(question);
    }
  });

  document.querySelectorAll(".que").forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight+10 + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", faqSection);

