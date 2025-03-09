import {
  onAuthStateChanged,
  doc,
  auth,
  getDoc,
  db,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  updateDoc,
  deleteDoc,
} from "../firebaseConfig.js";

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

// ------------------ initializeTooltips ------------------
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

//------------------  view Recipe ------------------
// ------------------ show recipe card ------------------
// ------------------ getting data from firebase ------------------

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const getAllUsers = async () => {
      const ref = query(collection(db, "userCollection"));

      const recipeContainer = document.querySelector(".recipe-container");
      const myCollection = document.querySelector("#myCollection");

      // Real-time update listener
      const unsubscribe = onSnapshot(ref, (querySnapshot) => {
        // Pehle container ko empty karo
        recipeContainer.innerHTML = "";
        myCollection.innerHTML = "";

        querySnapshot.forEach(async (_user) => {
          const recipeData = _user.data();

          const {
            userId,
            recipeVideoUrl,
            Title,
            image,
            Descp,
            Fat,
            Iron,
            CookTime,
            Serving,
            Carb,
            JsonIngs,
            JsonSteps,
            createdAt,
            selectedCategory,
          } = recipeData;

          console.log(recipeData);

          const recipeDiv = document.createElement("div");
          recipeDiv.classList.add("userCollection");

          const getUserName = await getDoc(doc(db, "foodies", userId));
          let userName;
          if (getUserName.exists()) {
            const userData = getUserName.data();
            userName = userData.signUserName;
          }

          // Directly add the recipe content
          recipeDiv.innerHTML = `
            <div class="userDiv">
              <div class="userName">${userName}</div>
              <div class="timeStamp">${createdAt}</div>
            </div>
            <div class="recipe">
              <div
                class="img"
                style="
                  background: url(${image}) no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              >
                <div class="nutritions">
                  <div class="box">Fat <span>${Fat}</span></div>
                  <div class="box">Iron <span>${Iron}</span></div>
                  <div class="box">Carbs <span>${Carb}</span></div>
                </div>
              </div>
              <div class="text">
                <h3>${Title}</h3>
                <div class="rating">
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <span> (4.5) </span>
                </div>
                <p class="flexBox">
                  Cook Time ${CookTime} Minutes
                  <span class="spanImg">
                    <img src="./aseets/imgs/cookTime.png" width="20" height="20" />
                  </span>
                </p>
                <p class="flexBox">
                  <span class="viewRecipe">Serving ${Serving}</span>
                  <span class="spanImg">
                    <img src="./aseets/imgs/serving.png" width="18" height="18" />
                  </span>
                </p>
                <p class="flexBox">
                  <span class="viewRecipe" onClick="viewRecipe('${getUserName.id}')">View Recipe</span>
                  <span class="spanImg">
                    <img src="./aseets/imgs/viewRecipe.png" width="18" height="18" />
                  </span>
                </p>
              </div>
            </div>
          `;

          // Recipe container me add karo
          recipeContainer.appendChild(recipeDiv);

          if (uid == userId) {
            console.log("user Matched", uid);
            myCollection.innerHTML = `
            <div class="userDiv">
              <div class="userName">${userName}</div>
              <div class="timeStamp">${createdAt}</div>
            </div>
            <div class="recipe">
              <div
                class="img"
                style="
                  background: url(${image}) no-repeat;
                  background-position: center;
                  background-size: cover;
                "
              >
                <div class="nutritions">
                  <div class="box">Fat <span>${Fat}</span></div>
                  <div class="box">Iron <span>${Iron}</span></div>
                  <div class="box">Carbs <span>${Carb}</span></div>
                </div>
              </div>
              <div class="text">
                <h3>${Title}</h3>
                <div class="rating">
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <img src="./aseets/imgs/starFill.png" width="20" height="20" />
                  <span> (4.5) </span>
                </div>
                <p class="flexBox">
                  Cook Time ${CookTime} Minutes
                  <span class="spanImg">
                    <img src="./aseets/imgs/cookTime.png" width="20" height="20" />
                  </span>
                </p>
                <p class="flexBox">
                  <span class="viewRecipe">Serving ${Serving}</span>
                  <span class="spanImg">
                    <img src="./aseets/imgs/serving.png" width="18" height="18" />
                  </span>
                </p>
                <p class="flexBox">
                  <span class="viewRecipe" onClick="viewRecipe('${getUserName.id}')">View Recipe</span>
                  <span class="spanImg">
                    <img src="./aseets/imgs/viewRecipe.png" width="18" height="18" />
                  </span>
                </p>
              </div>
            </div>
          `;
          }
        });
      });
    };

    getAllUsers();

    //------------------  view Recipe ------------------
    let currentPage = 1;

    function toggleClass(element, className) {
      element.classList.toggle(className);
    }

    window.movePage = function (element, page) {
      if (page === currentPage) {
        currentPage += 2;
        toggleClass(element, "left-side");
        if (element.nextElementSibling) {
          toggleClass(element.nextElementSibling, "left-side");
        }
      } else if (page === currentPage - 1) {
        currentPage -= 2;
        toggleClass(element, "left-side");
        if (element.previousElementSibling) {
          toggleClass(element.previousElementSibling, "left-side");
        }
      }
    };

    window.viewRecipe = async (id) => {
      console.log(id);

      const recipe = collection(db, "userCollection");

      // Create a query against the collection.
      const q = query(recipe, where("userId", "==", id));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const recipe = doc.data();

        currentPage = 1;

        const {
          recipeVideoUrl,
          Title,
          image,
          Descp,
          CookTime,
          Serving,
          ings,
          selectedCategory,
        } = recipe;

        const recipeOverlay = document.getElementById("recipeOverlay");
        const recipeDetailOverLay = document.querySelector(
          ".recipeDetailOverLay"
        );

        // Remove old content before adding new one
        recipeOverlay.innerHTML = "";

        recipeDetailOverLay.style.display = "flex";
        recipeOverlay.style.display = "flex";

        const recipeDetail = document.createElement("div");
        recipeDetail.classList.add("recipeDetails");
        recipeDetail.innerHTML = `
      <div class="page cover-front" onclick="movePage(this, 1)"></div>
      <div class="page cover-front" onclick="movePage(this, 2)">
      <img class="img" src="${image}" />
        </div>
        <div class="page text-page text-page-3" onclick="movePage(this, 3)">
          <h2 class="color">Special</h2>
          <h2 class="colored">${Title}</h2>
          <div class="icons">
          <span><img src="./aseets/imgs/icons(3).png" width="30" height="30"/> Serving <span>${Serving}</span></span>
          <span><img src="./aseets/imgs/icons(4).png" width="30" height="30"/> Method <span>Open</span></span>
          <span><img src="./aseets/imgs/icons(6).png" width="30" height="30"/> CookTime <span>${CookTime} Minutes</span></span>
          <span><img src="./aseets/imgs/icons(1).png" width="30" height="30"/> Category <span>${selectedCategory}</span></span>
          </div>
          <div class="halfPortion">
          <h2>Instructions</h2>
          <ul type="none" id="instructions">
                  <li><img src="./aseets/imgs/icons(5).png" width="15" height="15"> Boil the pasta in a large pot of salted water until al dente.</li>
                  <li><img src="./aseets/imgs/icons(5).png" width="15" height="15"> Drain the pasta and set aside.</li>
                  <li><img src="./aseets/imgs/icons(5).png" width="15" height="15"> In a large skillet, heat the oil over medium heat.</li>
                  <li><img src="./aseets/imgs/icons(5).png" width="15" height="15"> Add the onion and garlic and cook until soft.</li>
                  <li><img src="./aseets/imgs/icons(5).png" width="15" height="15"> Add the chicken and cook until browned.</li>
            </ul>
            <br>
            <div class="icons rat-vid">
            <span class="text">"This video provides a comprehensive guide for the recipe, covering all the steps and ingredients needed."</span>
            <span class="video" onclick="watch('${recipeVideoUrl}')"
            style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image}) no-repeat; background-position: center; background-size: cover;">
            <img src="./aseets/imgs/videoLink.png"/>
            </span>
            </div>
            </div>
            </div>
            <div class="page text-page text-page-4" onclick="movePage(this, 4)">
            <h2>Description</h2>
            <p>${Descp}<br/><br/>This delicious ${Title} is a perfect blend of taste and nutrition.
            Made with fresh ingredients, it brings out the authentic flavors of its origin.
            The cooking process enhances the aroma, making it irresistible.
            Perfect for family dinners, special occasions, or even a casual meal.
            Serve it hot with your favorite sides to enjoy its full flavor.
        Follow the step-by-step instructions to make this dish effortlessly at home.</p>
          <h2>Thank you ...</h2>
        </div>
      `;

        recipeOverlay.appendChild(recipeDetail);

        // Close modal when clicking outside content
        recipeDetailOverLay.onclick = (e) => {
          if (!recipeDetail.contains(e.target)) {
            closeRecipeOverlay();
          }
        };
      });
    };

    function closeRecipeOverlay() {
      document.querySelector(".recipeDetailOverLay").style.display = "none";
      document.getElementById("recipeOverlay").style.display = "none";
    }

    window.watch = (url) => {
      window.open(url, "_blank");
    };
  } else {
    console.log("user signed out");
    if (window?.location?.pathname === "/userCollection/userCollection.html") {
      window.location.replace("/");
    }
  }
});
