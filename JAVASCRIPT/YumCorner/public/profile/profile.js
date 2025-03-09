import { db, doc, getDocs, updateDoc, collection, auth, onAuthStateChanged,signOut } from "../firebaseConfig.js";


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

  // ------------------ 3. Date and Month setup------------------
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
  document.querySelector(".year").textContent = getYear;

  // ------------------ Profile ------------------
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "foodies"));
      querySnapshot.forEach((docu) => {
        if (docu.id == user.uid) {
          const data = docu.data();
          console.log(data);
          document.getElementById("userName").textContent = data.signUserName;
          document.getElementById("userContact").textContent =
            data.signupContact;
          document.getElementById("userEmail").textContent = data.signupEmail;
          document.getElementById("userPassword").textContent =
            data.signupPassword;
          document.getElementById("userTimeStamp").textContent = data.timestamp;
          //
          //
          //
          //
          //
          // ------------------ updateBtn ------------------
          document.getElementById("userEditName").value = data.signUserName;
          document.getElementById("userEditContact").value = data.signupContact;
          document.getElementById("userEditEmail").value = data.signupEmail;
          document.getElementById("userEditPassword").value =
            data.signupPassword;
          document
            .getElementById("updatedForm")
            ?.addEventListener("submit", async (e) => {
              e.preventDefault();

              const updatedName = document.getElementById("userEditName").value;
              const updatedContact =
                document.getElementById("userEditContact").value;
              const updatedEmail =
                document.getElementById("userEditEmail").value;
              const updatedPassword =
                document.getElementById("userEditPassword").value;

              console.log("Updated Data:", {
                updatedName,
                updatedContact,
                updatedEmail,
                updatedPassword,
              });

              const modal = bootstrap.Modal.getInstance(
                document.getElementById("exampleModal")
              );
              document.getElementById("exampleModal").style.display = "none";
              document.querySelector(".modal-backdrop").style.display = "none";
              modal.hide();
              try {
                const userRef = doc(db, "foodies", user.uid);
                await updateDoc(userRef, {
                  signUserName: updatedName,
                  signupEmail: updatedEmail,
                  signupContact: updatedContact,
                  signupPassword: updatedPassword,
                });
                Toastify({
                  text: "Document successfully updated!",
                  duration: 1500,
                  delay: 1000,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "#daa13e",
                  color: "var(--green)",
                  className: "toastify-center",
                  avatar: "./aseets/imgs/user-Authorize.png",
                }).showToast();
              } catch (error) {
                Toastify({
                  text: error.message,
                  duration: 1500,
                  delay: 1000,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "#daa13e",
                  color: "var(--green)",
                  className: "toastify-center",
                  avatar: "./aseets/imgs/user-Unauthorize.png",
                }).showToast();
              }
            });
            
          //
          //
          //
          //
          //
          // ------------------ logoutBtn ------------------
          document.getElementById("signOutBtn").addEventListener("click", () => {
            signOut(auth);
            Toastify({
                text: "User successfully logOut",
                duration: 1500,
                delay: 1000,
                gravity: "top",
                position: "center",
                backgroundColor: "#daa13e",
                color: "var(--green)",
                className: "toastify-center",
                avatar: "./aseets/imgs/user-Authorize.png",
              }).showToast();
            setTimeout(() => {
                
                window.location.href = "/";
            }, 1000);
          });
        }
      });
    } else {
      console.log("no user here");
    }
  });
});

const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const userIcon = document.querySelector(".userIcon");

if (maleRadio && femaleRadio) {
  maleRadio.addEventListener("change", () => {
    if (maleRadio.checked) {
      userIcon.src = "./aseets/imgs/avatarBoy.png";
      console.log("Male selected");
    }
  });

  femaleRadio.addEventListener("change", () => {
    if (femaleRadio.checked) {
      userIcon.src = "./aseets/imgs/avatarGirl.png";
      console.log("Female selected");
    }
  });
} else {
  console.error("Gender radio buttons not found.");
}

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
