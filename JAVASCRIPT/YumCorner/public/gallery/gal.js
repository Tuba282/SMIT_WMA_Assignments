
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

// ------------------  picture cards ------------------

const dishes = [
  {
    name: "Chocolate Mousse",
    category: "Sweet",
    imageUrl:
      "https://yeyfood.com/wp-content/uploads/2024/02/Choc-Mousse-735x805.jpg",
    posImg: "https://example.com/images/chocolate-mousse.jpg",
  },
  {
    name: "Strawberry Shake",
    category: "Drink",
    imageUrl:
      "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured-500x500.jpg",
    posImg: "https://example.com/images/strawberry-shake.jpg",
  },
  {
    name: "Lemon Tart Cake",
    category: "Cake",
    imageUrl:
      "https://data.thefeedfeed.com/static/2020/03/23/15849881495e78fff5b939f.png",
    posImg: "https://example.com/images/lemon-tart-cake.jpg",
  },
  {
    name: "Mango Sorbet",
    category: "Sweet",
    imageUrl:
      "https://www.everydaysouthwest.com/wp-content/uploads/2012/06/Mango-Sorbet-Dreamsicle-Dessert-2.jpg",
    posImg: "https://example.com/images/mango-sorbet.jpg",
  },
  {
    name: "Spicy Sausage",
    category: "Spicy",
    imageUrl:
      "https://www.itisakeeper.com/wp-content/uploads/2017/01/Slow-Cooker-Cocktail-Sausages-HERO1-500x500.jpg",
    posImg: "https://example.com/images/spicy-sausage.jpg",
  },
  {
    name: "Pineapple Punch",
    category: "Drink",
    imageUrl:
      "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/pineapple-punch-4.jpg",
    posImg: "https://example.com/images/pineapple-punch.jpg",
  },
  {
    name: "Carrot Cake",
    category: "Cake",
    imageUrl:
      "https://bakefromscratch.com/wp-content/uploads/2017/02/Carrot-Cake.jpg",
    posImg: "https://example.com/images/carrot-cake.jpg",
  },
  {
    name: "Berry Delight",
    category: "Sweet",
    imageUrl:
      "https://images-tastehub.mdlzapps.cloud/images/1c91b017-c893-4b5f-a95f-f54ee7849e84.jpg",
    posImg: "https://example.com/images/berry-delight.jpg",
  },
  {
    name: "Chili Cheese",
    category: "Spicy",
    imageUrl:
      "https://garnishedplate.com/wp-content/uploads/2020/01/Chli-Cheese-Fries-1-of-2.jpg",
    posImg: "https://example.com/images/chili-cheese.jpg",
  },
  {
    name: "Vanilla Latte",
    category: "Drink",
    imageUrl:
      "https://www.jerseygirlcooks.com/wp-content/uploads/2023/05/12x12-vanilla-latte-500x500.jpg",
    posImg: "https://example.com/images/vanilla-latte.jpg",
  },
  {
    name: "Banana Bread",
    category: "Cake",
    imageUrl:
      "https://feelgoodfoodie.net/wp-content/uploads/2016/10/Strawberry-Banana-Bread-11.jpg",
    posImg: "https://example.com/images/banana-bread.jpg",
  },
  {
    name: "Peach Cobbler",
    category: "Sweet",
    imageUrl:
      "https://www.mommalew.com/wp-content/uploads/2023/06/Peach-Cobbler-Pie-Cupcakes-Set-3-4-scaled-720x720.jpg",
    posImg: "https://example.com/images/peach-cobbler.jpg",
  },
  {
    name: "Hot Salsa Dip",
    category: "Spicy",
    imageUrl:
      "https://mindovermunch.com/wp-content/uploads/2018/08/Kid-Friendly-Salsa-3-500x500.jpg",
    posImg: "https://example.com/images/hot-salsa-dip.jpg",
  },
  {
    name: "Lemonade Fizz",
    category: "Drink",
    imageUrl:
      "https://saltysweetlife.com/wp-content/uploads/2014/06/lavendervodkalemonade-6.jpg?w=840",
    posImg: "https://example.com/images/lemonade-fizz.jpg",
  },
  {
    name: "Blueberry Muffin",
    category: "Cake",
    imageUrl:
      "https://media.istockphoto.com/id/105691211/photo/blueberry-muffins.jpg?s=612x612&w=0&k=20&c=y2MZMioA_xg1dIujYjso3VpvxklW04KOZBYHmuN4428=",
    posImg: "https://example.com/images/blueberry-muffin.jpg",
  },
  {
    name: "Cherry Tart",
    category: "Sweet",
    imageUrl:
      "https://api.photon.aremedia.net.au/wp-content/uploads/sites/10/GourmetTraveller/2013/05/09/8150/1210gtcherrytart-628.jpg?resize=760%2C608",
    posImg: "https://example.com/images/cherry-tart.jpg",
  },
  {
    name: "Spicy Noodles",
    category: "Spicy",
    imageUrl:
      "https://thewoksoflife.com/wp-content/uploads/2019/02/spicy-pork-noodles-16.jpg",
    posImg: "https://example.com/images/spicy-noodles.jpg",
  },
  {
    name: "Orange Cheezcake",
    category: "Drink",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqrNa65F-aq1HVi1ExQJAlej1bHM7eC4xPXYxx75GwHbqukN1cFHdgiG2wqxXN0-BSa4&usqp=CAU",
    posImg: "https://example.com/images/orange-cooler.jpg",
  },
  {
    name: "Coffee Crumble",
    category: "Cake",
    imageUrl:
      "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/Super-Crumb-Coffee-Cake-4.jpg",
    posImg: "https://example.com/images/coffee-crumble.jpg",
  },
  {
    name: "Nutty Brownie",
    category: "Sweet",
    imageUrl: "https://myborosil.com/cdn/shop/articles/almond-brownie.jpg",
    posImg: "https://example.com/images/nutty-brownie.jpg",
  },
  {
    name: "Hot Pepperoni",
    category: "Spicy",
    imageUrl:
      "https://mccormick.widen.net/content/s3wztovudc/jpeg/Franks_Squeeze_HotHoney_PepPizza_Static_2024_800x800.jpg",
    posImg: "https://example.com/images/hot-pepperoni.jpg",
  },
  {
    name: "Orange Cooler",
    category: "Drink",
    imageUrl:
      "https://www.patrontequila.com/binaries/content/gallery/patrontequila/recipes/patron-silver/orange-mint-cooler/hero.jpg",
    posImg: "https://example.com/images/ginger-tea.jpg",
  },
  {
    name: "Coconut Cake",
    category: "Cake",
    imageUrl:
      "https://shop.screalfoods.com/wp-content/uploads/coconut-cream-cake-2.jpg",
    posImg: "https://example.com/images/coconut-cake.jpg",
  },
  {
    name: "Mint Choco Chip",
    category: "Sweet",
    imageUrl:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2017/12/Chocolate-Mint-Chip-Cookies-6.jpg",
    posImg: "https://example.com/images/mint-choco-chip.jpg",
  },
];
const mainGallery = document.querySelector(".mainGallery");
dishes.forEach((dish, ind) => {
  const pictCard = document.createElement("div");
  pictCard.setAttribute("class", `pictCard  pictCard-${ind+1}`);
  if (ind % 2 === 0) {
    pictCard.classList.add("even");
  } else {
    pictCard.classList.add("odd");
  }
  pictCard.innerHTML = `
              <img src="${dish.imageUrl}" class="img">
              <p class="title">${dish.name}</p>
  `;
  mainGallery.appendChild(pictCard);
});

// ------------------  tooltips ------------------
function initializeTooltips() {
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