import { initializeTooltips } from "../blog/blog.js";
// import { fetchTastyApi } from "../fetchApi.js";
import { edamam, recipes, getRecipes } from "../fetchApi.js";
import {
  db,
  getDocs,
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
  doc,
  setDoc,
  addDoc,
  auth,
  onAuthStateChanged,
} from "../firebaseConfig.js";

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

// ------------------ Add Recipe Modal ------------------
var modal = document.getElementById("recipeModal");
var openModalBtn = document.getElementById("openModalBtn");

function openModal() {
  modal.style.display = "flex";
}
openModalBtn.addEventListener("click", openModal);

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
window.addEventListener("click", outsideClick);

// Add ingredient functionality
document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("add-ingredient-btn")) {
    addIngredientField(event.target);
  } else if (event.target && event.target.classList.contains("add-step-btn")) {
    addStepField(event.target);
  }
});

window.addIngredientField = function (button) {
  var container = document.getElementById("ingredients-container");
  var newField = document.createElement("div");
  newField.classList.add("ingredient-input");
  newField.innerHTML = `
    <input type="text" name="ingredients[]" required>
    <button type="button" class="add-ingredient-btn">+</button>
  `;
  container.appendChild(newField);
};

window.addStepField = function (button) {
  var container = document.getElementById("steps-container");
  var stepNumber = container.children.length + 1;
  var newField = document.createElement("div");
  newField.classList.add("step-input");
  newField.innerHTML = `
    <span class="step-number" style="font-family: title;">${stepNumber}. </span>
    <input type="text" name="cookingSteps[]" required>
    <button type="button" class="add-step-btn">+</button>
  `;
  container.appendChild(newField);
};

document.querySelector(".addRecipeImg")?.addEventListener("click", () => {
  document.getElementById("uploadImage").click();
});

var selectedCategory = "";

window.addRecipeDetails = async (e) => {
  e.preventDefault();

  const Img = document.getElementById("uploadImage");
  const selectedImg = Img.files[0];
  console.log("Selected image file: ", selectedImg);

  let image = await uploadImge(selectedImg);  
  if (!image) {
    console.error("Image upload failed, can't proceed with adding recipe.");
    return;
  }

  const Title = document.getElementById("recipeName").value;
  const Descp = document.getElementById("description").value;
  const Fat = document.getElementById("userFat").value;
  const Iron = document.getElementById("userIron").value;
  const Carb = document.getElementById("userCarb").value;
  const CookTime = document.getElementById("userCookTime").value;
  const Serving = document.getElementById("userServing").value;
  const ings = Array.from(
    document.querySelectorAll('input[name="ingredients[]"]')
  ).map((input) => input.value);
  const steps = Array.from(
    document.querySelectorAll('input[name="cookingSteps[]"]')
  ).map((input) => input.value);

  // const JsonIngs = JSON.stringify(ings);
  // const JsonSteps = JSON.stringify(steps);
  

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'short', // "Dec"
    day: '2-digit', // "25"
    year: 'numeric' // "2025"
  });

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await addDoc(collection(db, "userCollection"), {
        userId: user.uid,
        recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
        Title,
        image,
        Descp,
        Fat,
        Iron,
        CookTime,
        Serving,
        Carb,
        ings,
        steps,
        createdAt: `${formattedDate}, ${formattedTime}`,
        selectedCategory,
      });
      console.log(user.uid);
    } else {
      Toastify({
        text: "No user is signed in.",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();
    }
  });

  setTimeout(() => {
    modal.style.display = "none";
    window.open("/userCollection/userCollection.html", "_blank");

  }, 1000);
};


document
  .getElementById("recipeForm")
  ?.addEventListener("submit", addRecipeDetails);

window.category = (cate) => {
  selectedCategory = cate;
  document.querySelector(".dropdown-options").style.display = "none";
};

// ------------------ upload image in cloudinary helping function ------------------
const uploadImge = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "uploadPreset");
  formData.append("cloud_name", "dzq61zzxb");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dzq61zzxb/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Image upload response: ", data); // Add this line to check the response
    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error("Image URL not found");
    }
  } catch (error) {
    console.log("Image upload error:", error);
    return null;
  }
};


// ------------------ show recipe card ------------------

const recipecards = async () => {
  const recipeContainer = document.querySelector(".recipe-container");
  if (!recipeContainer) {
    console.error("Recipe container not found");
    return;
  }

  const sortedRecipes = recipes.slice(0, 12);

  sortedRecipes.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25" onclick="favRecipeModal(${id})">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25" onclick="favRecipeModal(${id})">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

    recipeContainer?.appendChild(recipeDiv);

    // AddToFav click event listeners
    recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
      Toastify({
        text: "Added in your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
      document.getElementById("favList").style.display = "block";
    });

    recipeDiv.querySelector(".save").addEventListener("click", () => {
      Toastify({
        text: "Removed from your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
    });

    // Share button listener
    recipeDiv?.querySelector(".share-button").addEventListener("click", (e) => {
      // const recipeName = e.target.getAttribute("data-recipe");
      // const recipeUrl = e.target.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeTitle}`,
            url: recipeVideoUrl,
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
};

document.addEventListener("DOMContentLoaded", recipecards);

window.moveTo = (num) => {
  const recipeContainer = document.querySelector(".recipe-container");

  if (!recipeContainer) {
    console.error("Recipe container not found");
    return;
  }

  recipeContainer.innerHTML = "";

  let sortedRecipes = [];
  if (num == 1) {
    sortedRecipes = recipes.slice(0, 12);
  } else if (num == 2) {
    sortedRecipes = recipes.slice(12, 24);
  } else if (num == 3) {
    sortedRecipes = recipes.slice(24, 36);
  } else if (num == 4) {
    sortedRecipes = recipes.slice(36, 48);
  } else {
    sortedRecipes = recipes.slice(48, 60);
  }

  sortedRecipes.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    recipeDiv.innerHTML = `<div class="LoaderDiv"> <span class="loader"></span></div>`;
    recipeContainer.appendChild(recipeDiv);

    setTimeout(() => {
      recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

      recipeContainer?.appendChild(recipeDiv);

      // AddToFav click event listeners
      recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
        Toastify({
          text: "Added in your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
      });

      recipeDiv.querySelector(".save").addEventListener("click", () => {
        Toastify({
          text: "Removed from your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
      });

      // Share button listener
      recipeDiv
        ?.querySelector(".share-button")
        .addEventListener("click", (e) => {
          // const recipeName = e.target.getAttribute("data-recipe");
          // const recipeUrl = e.target.getAttribute("data-url");
          if (navigator.share) {
            navigator
              .share({
                title: "Recipe",
                text: `Check out this recipe: ${recipeTitle}`,
                url: recipeVideoUrl,
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
    }, 1500);
  });
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// // ------------------  Dummy Api Recipe ------------------
// const showRecipes = async () => {
//   const res = await fetch("https://dummyjson.com/recipes").then((res) =>res.json());

//   const data = res.recipes;
//   console.log(data);

// };showRecipes()

// ------------------ recipe details card ------------------

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

window.viewRecipe = (id) => {
  const recipe = recipes?.find((recipe) => recipe.id == parseInt(id));
  if (!recipe) return;

  currentPage = 1;

  const {
    recipeTitle,
    recipeImg,
    prepTime,
    servings,
    cookTime,
    instructions,
    longDescription,
    recipeVideoUrl,
  } = recipe;

  const recipeOverlay = document.getElementById("recipeOverlay");
  const recipeDetailOverLay = document.querySelector(".recipeDetailOverLay");

  // Remove old content before adding new one
  recipeOverlay.innerHTML = "";

  recipeDetailOverLay.style.display = "flex";
  recipeOverlay.style.display = "flex";

  const recipeDetail = document.createElement("div");
  recipeDetail.classList.add("recipeDetails");
  recipeDetail.innerHTML = `
  <div class="page cover-front" onclick="movePage(this, 1)"></div>
  <div class="page cover-front" onclick="movePage(this, 2)">
  <img class="img" src="${recipeImg}" />
    </div>
    <div class="page text-page text-page-3" onclick="movePage(this, 3)">
      <h2 class="color">Special</h2>
      <h2 class="colored">${recipeTitle}</h2>
      <div class="icons">
      <span><img src="./aseets/imgs/icons(3).png" width="30" height="30"/> Serving <span>${servings}</span></span>
      <span><img src="./aseets/imgs/icons(4).png" width="30" height="30"/> Method <span>Open</span></span>
      <span><img src="./aseets/imgs/icons(6).png" width="30" height="30"/> CookTime <span>${cookTime}</span></span>
      <span><img src="./aseets/imgs/icons(1).png" width="30" height="30"/> PrepTime <span>${prepTime}</span></span>
      </div>
      <div class="halfPortion">
      <h2>Instructions</h2>
      <ul type="none" id="instructions">
      ${instructions
        .map(
          (ins) =>
            `<li><img src="./assets/imgs/icons(5).png" width="15" height="15"> ${ins}</li>`
        )
        .join("")}
        </ul>
        <br>
        <div class="icons rat-vid">
        <span class="text">"This video provides a comprehensive guide for the recipe, covering all the steps and ingredients needed."</span>
        <span class="video" onclick="watch('${recipeVideoUrl}')"
        style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <img src="./aseets/imgs/videoLink.png"/>
        </span>
        </div>
        </div>
        </div>
        <div class="page text-page text-page-4" onclick="movePage(this, 4)">
        <h2>Description</h2>
        <p>${longDescription}<br/><br/>This delicious ${recipeTitle} is a perfect blend of taste and nutrition. 
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
};

function closeRecipeOverlay() {
  document.querySelector(".recipeDetailOverLay").style.display = "none";
  document.getElementById("recipeOverlay").style.display = "none";
}

window.watch = (url) => {
  window.open(url, "_blank");
};
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --

// ------------------------ category sorting

const downArrow = document.querySelector(".down-arrow");
downArrow.addEventListener("click", () => {
  const cateResults = document.querySelector(".cateResults");
  if (cateResults.style.display == "none") {
    cateResults.style.display = "grid";
    downArrow.style.transform = "rotate(180deg)";
  } else {
    cateResults.style.display = "none";
    downArrow.style.transform = "rotate(0deg)";
  }
});

const sortArrow = document.querySelector(".sort-arrow");
sortArrow.addEventListener("click", () => {
  const sortResults = document.querySelector(".sortResults");
  if (sortResults.style.display == "none") {
    sortResults.style.display = "grid";
    sortArrow.style.transform = "rotate(180deg)";
  } else {
    sortResults.style.display = "none";
    sortArrow.style.transform = "rotate(0deg)";
  }
});

const typeArrow = document.querySelector(".type-arrow");
typeArrow.addEventListener("click", () => {
  const typeResults = document.querySelector(".typeResults");
  if (typeResults.style.display == "none") {
    typeResults.style.display = "grid";
    typeArrow.style.transform = "rotate(180deg)";
  } else {
    typeResults.style.display = "none";
    typeArrow.style.transform = "rotate(0deg)";
  }
});

// ------------------------ sort by country

const regions = [...new Set(recipes.flatMap((recipe) => recipe.dishCountry))];

regions.map((region) => {
  document.querySelector(".cateResults").innerHTML += `
  <span onclick="sortByRegion('${region}')">${region}</span>
  `;
});

window.sortByRegion = (country) => {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.dishCountry == country
  );
  const recipeContainer = document.querySelector(".recipe-container");

  recipeContainer.innerHTML = "";

  filteredRecipes.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

    recipeContainer?.appendChild(recipeDiv);

    // AddToFav click event listeners
    recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
      Toastify({
        text: "Added in your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
      document.getElementById("favList").style.display = "block";
    });

    recipeDiv.querySelector(".save").addEventListener("click", () => {
      Toastify({
        text: "Removed from your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
    });

    // Share button listener
    recipeDiv?.querySelector(".share-button").addEventListener("click", (e) => {
      // const recipeName = e.target.getAttribute("data-recipe");
      // const recipeUrl = e.target.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeTitle}`,
            url: recipeVideoUrl,
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
};

// ------------------------ sort by disType

const dishTypes = [...new Set(recipes.flatMap((recipe) => recipe.dishType))];

dishTypes.map((type) => {
  document.querySelector(".typeResults").innerHTML += `
  <span onclick="sortByType('${type}')">${type}</span>
  `;
});

window.sortByType = (Type) => {
  const filterType = recipes.filter((recipe) =>
    recipe.dishType.some(
      (type) => type.trim().toLowerCase() === Type.trim().toLowerCase()
    )
  );
  console.log(filterType);

  const recipeContainer = document.querySelector(".recipe-container");

  recipeContainer.innerHTML = "";

  filterType.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

    recipeContainer?.appendChild(recipeDiv);

    // AddToFav click event listeners
    recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
      Toastify({
        text: "Added in your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
      document.getElementById("favList").style.display = "block";
    });

    recipeDiv.querySelector(".save").addEventListener("click", () => {
      Toastify({
        text: "Removed from your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
    });

    // Share button listener
    recipeDiv?.querySelector(".share-button").addEventListener("click", (e) => {
      // const recipeName = e.target.getAttribute("data-recipe");
      // const recipeUrl = e.target.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeTitle}`,
            url: recipeVideoUrl,
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
};

// ------------------------ sort by Ascending Order

const asceRecipes = await getRecipes();
const asceOrder = asceRecipes.sort((a, b) => {
  return a.recipeTitle.localeCompare(b.recipeTitle);
});

window.sortByAsce = async () => {
  try {
    const ref = query(collection(db, "recipes"), orderBy("recipeTitle", "asc"));
    const querySnapshot = await getDocs(ref);
    const recipes = querySnapshot.docs.map((doc) => doc.data());

    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe) => {
      const {
        id,
        recipeTitle,
        recipeImg,
        ratings,
        servings,
        cookTime,
        nutritions,
        recipeVideoUrl,
      } = recipe;

      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
        <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
          <div class="AddToFav">
            <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
            <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          </div>
          <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
            0,
            32
          )}" data-url="${recipeVideoUrl}">
            <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
          </div>
          <div class="nutritions">
            <div class="box">Fat <span>${nutritions.fats}</span></div>
            <div class="box">Iron <span>${nutritions.iron}</span></div>
            <div class="box">Carbs <span>${nutritions.carbs}</span></div>
          </div>
        </div>
        <div class="text">
          <h3>${recipeTitle.slice(0, 32)}</h3>
          <div class="rating">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
          </div>
          <p class="flexBox"> Cook Time ${cookTime}
            <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
          </p>
          <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
          <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
          </p>
          <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
            <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
          </button>
        </div>
      `;

      recipeContainer?.appendChild(recipeDiv);

      // AddToFav click event listeners
      recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
        Toastify({
          text: "Added in your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
        document.getElementById("favList").style.display = "block";
      });

      recipeDiv.querySelector(".save").addEventListener("click", () => {
        Toastify({
          text: "Removed from your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
      });

      // Share button listener
      recipeDiv
        ?.querySelector(".share-button")
        .addEventListener("click", (e) => {
          // const recipeName = e.target.getAttribute("data-recipe");
          // const recipeUrl = e.target.getAttribute("data-url");
          if (navigator.share) {
            navigator
              .share({
                title: "Recipe",
                text: `Check out this recipe: ${recipeTitle}`,
                url: recipeVideoUrl,
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
  } catch (error) {
    console.error("Error fetching recipes:", error);
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = `<div><img src="./aseets/imgs/loader.gif" class="type-arrow" width="35" height="35"></div>`;
  }
};

// ------------------------ sort by Descending Order

const descRecipes = await getRecipes();
const desceOrder = descRecipes.sort((a, b) => {
  return b.recipeTitle.localeCompare(a.recipeTitle);
});

window.sortByDesc = async () => {
  try {
    const ref = query(
      collection(db, "recipes"),
      orderBy("recipeTitle", "desc")
    );
    const querySnapshot = await getDocs(ref);
    const recipes = querySnapshot.docs.map((doc) => doc.data());

    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe) => {
      const {
        id,
        recipeTitle,
        recipeImg,
        ratings,
        servings,
        cookTime,
        nutritions,
        recipeVideoUrl,
      } = recipe;

      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
        <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
          <div class="AddToFav">
            <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
            <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          </div>
          <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
            0,
            32
          )}" data-url="${recipeVideoUrl}">
            <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
          </div>
          <div class="nutritions">
            <div class="box">Fat <span>${nutritions.fats}</span></div>
            <div class="box">Iron <span>${nutritions.iron}</span></div>
            <div class="box">Carbs <span>${nutritions.carbs}</span></div>
          </div>
        </div>
        <div class="text">
          <h3>${recipeTitle.slice(0, 32)}</h3>
          <div class="rating">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
          </div>
          <p class="flexBox"> Cook Time ${cookTime}
            <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
          </p>
          <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
          <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
          </p>
          <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
            <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
          </button>
        </div>
      `;

      recipeContainer?.appendChild(recipeDiv);

      // AddToFav click event listeners
      recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
        Toastify({
          text: "Added in your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
        document.getElementById("favList").style.display = "block";
      });

      recipeDiv.querySelector(".save").addEventListener("click", () => {
        Toastify({
          text: "Removed from your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
      });

      // Share button listener
      recipeDiv
        ?.querySelector(".share-button")
        .addEventListener("click", (e) => {
          // const recipeName = e.target.getAttribute("data-recipe");
          // const recipeUrl = e.target.getAttribute("data-url");
          if (navigator.share) {
            navigator
              .share({
                title: "Recipe",
                text: `Check out this recipe: ${recipeTitle}`,
                url: recipeVideoUrl,
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
  } catch (error) {
    console.error("Error fetching recipes:", error);
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = `<div><img src="./aseets/imgs/loader.gif" class="type-arrow" width="35" height="35"></div>`;
  }
};

// ------------------------ search filtration

document.getElementById("searchItem").addEventListener("input", async () => {
  const recipeContainer = document.querySelector(".recipe-container");
  recipeContainer.innerHTML = "";

  const searchItem = document.getElementById("searchItem").value.toLowerCase();
  const myRecipes = await getRecipes();
  const matchedTitle = myRecipes.filter((recipe) => {
    const searchByTitle = recipe.recipeTitle
      ?.toLowerCase()
      .includes(searchItem);
    const searchByTag = recipe.tags?.forEach((tag) => {
      if (tag.toLowerCase().includes(searchItem)) {
        return true;
      } else {
        return false;
      }
    });
    const searchByDishType = recipe.dishType?.forEach((type) => {
      if (type.toLowerCase().includes(searchItem)) {
        return true;
      } else {
        return false;
      }
    });
    return searchByTitle || searchByTag || searchByDishType;
  });

  if (matchedTitle != 0) {
    matchedTitle.forEach((recipe) => {
      const {
        id,
        recipeTitle,
        recipeImg,
        ratings,
        servings,
        cookTime,
        nutritions,
        recipeVideoUrl,
      } = recipe;

      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
        <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
          <div class="AddToFav">
            <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
            <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          </div>
          <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
            0,
            32
          )}" data-url="${recipeVideoUrl}">
            <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
          </div>
          <div class="nutritions">
            <div class="box">Fat <span>${nutritions.fats}</span></div>
            <div class="box">Iron <span>${nutritions.iron}</span></div>
            <div class="box">Carbs <span>${nutritions.carbs}</span></div>
          </div>
        </div>
        <div class="text">
          <h3>${recipeTitle.slice(0, 32)}</h3>
          <div class="rating">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
            <img src="./aseets/imgs/starFill.png" width="20" height="20">
          </div>
          <p class="flexBox"> Cook Time ${cookTime}
            <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
          </p>
          <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
          <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
          </p>
          <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
            <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
          </button>
        </div>
      `;

      recipeContainer?.appendChild(recipeDiv);

      // AddToFav click event listeners
      recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
        Toastify({
          text: "Added in your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
        document.getElementById("favList").style.display = "block";
      });

      recipeDiv.querySelector(".save").addEventListener("click", () => {
        Toastify({
          text: "Removed from your Favorite List",
          duration: 1500,
          gravity: "top",
          position: "center",
          backgroundColor: "#daa13e",
          color: "var(--green)",
          className: "toastify-center",
          avatar: "./aseets/imgs/thumbsup.png",
        }).showToast();

        const notSaveImg = recipeDiv.querySelector(".Notsave");
        const saveImg = recipeDiv.querySelector(".save");
        notSaveImg.classList.toggle("hide");
        notSaveImg.classList.toggle("show");
        saveImg.classList.toggle("hide");
        saveImg.classList.toggle("show");
      });

      // Share button listener
      recipeDiv
        ?.querySelector(".share-button")
        .addEventListener("click", (e) => {
          // const recipeName = e.target.getAttribute("data-recipe");
          // const recipeUrl = e.target.getAttribute("data-url");
          if (navigator.share) {
            navigator
              .share({
                title: "Recipe",
                text: `Check out this recipe: ${recipeTitle}`,
                url: recipeVideoUrl,
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
  } else {
    recipeContainer.innerHTML = `<div><img src="./aseets/imgs/loader.gif" class="type-arrow" width="35" height="35"></div>`;
  }
});

// ------------------------ sort by high servings

window.highServing = async () => {
  const myRecipes = await getRecipes();
  const sortedByServing = myRecipes.sort((a, b) => b.servings - a.servings);

  const recipeContainer = document.querySelector(".recipe-container");
  recipeContainer.innerHTML = "";

  sortedByServing.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

    recipeContainer?.appendChild(recipeDiv);

    // AddToFav click event listeners
    recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
      Toastify({
        text: "Added in your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
      document.getElementById("favList").style.display = "block";
    });

    recipeDiv.querySelector(".save").addEventListener("click", () => {
      Toastify({
        text: "Removed from your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
    });

    // Share button listener
    recipeDiv?.querySelector(".share-button").addEventListener("click", (e) => {
      // const recipeName = e.target.getAttribute("data-recipe");
      // const recipeUrl = e.target.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeTitle}`,
            url: recipeVideoUrl,
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
};

// ------------------------ sort by low Carbs
window.lowCarbs = async () => {
  const myRecipes = await getRecipes();
  const lowCarbs = myRecipes
    .map((recipe) => {
      let carbs = parseFloat(recipe.nutritions["carbs"].slice(0, -1)); // Convert to number
      return { ...recipe, carbs };
    })
    .sort((a, b) => a.carbs - b.carbs);

  const recipeContainer = document.querySelector(".recipe-container");
  recipeContainer.innerHTML = "";

  lowCarbs.forEach((recipe) => {
    const {
      id,
      recipeTitle,
      recipeImg,
      ratings,
      servings,
      cookTime,
      nutritions,
      recipeVideoUrl,
    } = recipe;

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
      <div class="img" style="background: url(${recipeImg}) no-repeat; background-position: center; background-size: cover;">
        <div class="AddToFav">
          <img src="./aseets/imgs/saveNot.png" class="Notsave show" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
          <img src="./aseets/imgs/save.png" class="save hide" width="25" height="25"  data-bs-toggle="modal" onclick="favRecipeModal(${id})">
        </div>
        <div class="AddToFav share-button" data-recipe="${recipeTitle.slice(
          0,
          32
        )}" data-url="${recipeVideoUrl}">
          <img src="./aseets/imgs/share.png" class="Notsave" width="20" height="20">
        </div>
        <div class="nutritions">
          <div class="box">Fat <span>${nutritions.fats}</span></div>
          <div class="box">Iron <span>${nutritions.iron}</span></div>
          <div class="box">Carbs <span>${nutritions.carbs}</span></div>
        </div>
      </div>
      <div class="text">
        <h3>${recipeTitle.slice(0, 32)}</h3>
        <div class="rating">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
          <img src="./aseets/imgs/starFill.png" width="20" height="20">
        </div>
        <p class="flexBox"> Cook Time ${cookTime}
          <span class="spanImg"><img src="./aseets/imgs/cookTime.png" width="20" height="20"></span>
        </p>
        <p type="button" class="flexBox"><span class="viewRecipe">serving ${servings}</span>
        <span class="spanImg"><img src="./aseets/imgs/serving.png" width="18" height="18"></span>
        </p>
        <button class="flexBox" onclick="viewRecipe(${id})"><span class="viewRecipe">view recipe</span>
          <span class="spanImg"><img src="./aseets/imgs/viewRecipe.png" width="18" height="18"></span>
        </button>
      </div>
    `;

    recipeContainer?.appendChild(recipeDiv);

    // AddToFav click event listeners
    recipeDiv.querySelector(".Notsave").addEventListener("click", () => {
      Toastify({
        text: "Added in your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
      document.getElementById("favList").style.display = "block";
    });

    recipeDiv.querySelector(".save").addEventListener("click", () => {
      Toastify({
        text: "Removed from your Favorite List",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/thumbsup.png",
      }).showToast();

      const notSaveImg = recipeDiv.querySelector(".Notsave");
      const saveImg = recipeDiv.querySelector(".save");
      notSaveImg.classList.toggle("hide");
      notSaveImg.classList.toggle("show");
      saveImg.classList.toggle("hide");
      saveImg.classList.toggle("show");
    });

    // Share button listener
    recipeDiv?.querySelector(".share-button").addEventListener("click", (e) => {
      // const recipeName = e.target.getAttribute("data-recipe");
      // const recipeUrl = e.target.getAttribute("data-url");
      if (navigator.share) {
        navigator
          .share({
            title: "Recipe",
            text: `Check out this recipe: ${recipeTitle}`,
            url: recipeVideoUrl,
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
};
window.lowCarbs = lowCarbs;

const favList = [];

window.favRecipeModal = async (id) => {
  const favRecipeModal = document.querySelector("#favRecipeModal");
  const favRep = await getRecipes();
  const matchedRecipe = favRep.find((recipe) => recipe.id == id);

  const index = favList.indexOf(id);
  if (index > -1) {
    favList.splice(index, 1);

    const recipeElement = document.getElementById(`recipe-${id}`);
    if (recipeElement) {
      recipeElement.remove();
    }
    console.log(`Recipe with ID ${id} removed from favorites.`);
  } else {
    favList.push(id);
    favRecipeModal.innerHTML += `
      <div id="recipe-${id}" class="d-flex justify-content-start align-items-center gap-3 mb-3 pb-3 border-bottom">
        <div class="favRepImg rounded-3 d-flex justify-content-center align-items-center"
        style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${matchedRecipe.recipeImg}) no-repeat;
        background-position: center;
        background-size: cover;"
        >
          <img src="./aseets/imgs/favRepImg.png" class="sort-arrow" width="40" height="40">
        </div>
        <div class="favRepInfo d-grid">
          <span class="fs-5 fw-bold" style="font-family: title; color:var(--orange)">${matchedRecipe.recipeTitle}</span>
          <span class="" style="font-family: title; color:var(--orange)">Servings : ${matchedRecipe.servings}</span>
          <span class="" style="font-family: title; color:var(--orange)">Under : ${matchedRecipe.cookTime}</span>
        </div>
      </div>
    `;
    console.log(`Recipe with ID ${id} added to favorites.`);
  }
};

// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
// --
