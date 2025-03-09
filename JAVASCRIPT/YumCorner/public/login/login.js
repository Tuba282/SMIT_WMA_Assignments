import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "../firebaseConfig.js";
import {
  doc,
  setDoc,
  getDoc,
  db,
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
} from "../firebaseConfig.js";

const convertServerTimestamp = (timestamp) => {
  const date = timestamp.toDate();
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const formattedDate = convertServerTimestamp(Timestamp.now());

// ------------------------------ signUp Form
const signUpForm = async (event) => {
  event.preventDefault();
  const signupEmail = document.getElementById("signupEmail").value;
  const signupPassword = document.getElementById("signupPassword").value;
  const signUserName = document.getElementById("signUserName").value;
  const signupContact = document.getElementById("signupContact").value;
  try {
    const userCredintials = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );
    let user = userCredintials.user;
    await setDoc(doc(db, "foodies", user.uid), {
      signUserName,
      signupContact,
      signupPassword,
      signupEmail,
      isActive: true,
      isAdmin: false,
      timestamp: formattedDate,
    });
    // agr user admin hai to admin portal pe jaye ga otherwise Home page pe
    Toastify({
      text: "User Successfuly created ...",
      duration: 1500,
      delay: 1000,
      gravity: "top",
      position: "center",
      backgroundColor: "#daa13e",
      color: "var(--darkGreen)",
      className: "toastify-center",
      avatar: "./aseets/imgs/user-Unauthorize.png",
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
};
document.getElementById("signUp-form")?.addEventListener("submit", signUpForm);

// ------------------------------ login Form

const loginForm = async (event) => {
  event.preventDefault();

  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  try {
    const userCredintials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    const docRef = doc(db, "foodies", userCredintials.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      // agr user admin hai to admin portal pe jaye ga otherwise Home page pe
      if (user.isAdmin) {
        window.location.replace("/admin.html");
      } else {
        window.location.replace("/");
      }
    } else {
      console.log("No such document!");
    }
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
};
document.getElementById("login-form")?.addEventListener("submit", loginForm);

// ------------------------------ forget Password

const _forgetPassword = async (event) => {
  event.preventDefault();
  try {
    const recoveryEmail = document.getElementById("recoveryEmail").value;
    if (recoveryEmail) {
      await sendPasswordResetEmail(auth, recoveryEmail);
      Toastify({
        text: "Password reset email sent!",
        duration: 1500,
        delay: 1000,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/user-Authorize.png",
      }).showToast();
    } else {
      console.log();
      Toastify({
        text: "Please enter a valid email address.",
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
  } catch (error) {
    console.log(error.message);
  }
};

document
  .getElementById("forgetPasswordForm")
  ?.addEventListener("submit", _forgetPassword);

// ------------------------------  signUp with google

const signProvider = new GoogleAuthProvider();
signProvider.setCustomParameters({ prompt: "select_account" });

const _signInWithGoogle = async () => {
  try {
    await signOut(auth);
    const result = await signInWithPopup(auth, signProvider);
    if (result) {
      let user = result.user;

      await setDoc(doc(db, "foodies", user.uid), {
        signUserName: user.displayName || "-",
        signupContact: user.phoneNumber || "-",
        signupPassword: "-",
        signupEmail: user.email,
        isActive: true,
        isAdmin: false,
        timestamp: formattedDate,
      });

      Toastify({
        text: "SignUp Successfully ...",
        duration: 1500,
        delay: 1000,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/user-Authorize.png",
      }).showToast();

      window.location.replace("/");
    } else {
      Toastify({
        text: "Something went wrong ...",
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
  } catch (error) {
    console.log(error.message);
  }
};

document
  .getElementById("google-signUp-button")
  ?.addEventListener("click", _signInWithGoogle);

// ------------------------------  login with google

const loginProvider = new GoogleAuthProvider();
loginProvider.setCustomParameters({ prompt: "select_account" });

const _loginInWithGoogle = async () => {
  try {
    await signOut(auth);
    const result = await signInWithPopup(auth, loginProvider);
    if (result) {
      let user = result.user;

      await setDoc(doc(db, "foodies", user.uid), {
        signUserName: user.displayName || "-",
        signupContact: user.phoneNumber || "-",
        signupPassword: "-",
        signupEmail: user.email,
        isActive: true,
        isAdmin: false,
        timestamp: formattedDate,
      });

      Toastify({
        text: "Login Successfully ...",
        duration: 1500,
        delay: 1000,
        gravity: "top",
        position: "center",
        backgroundColor: "#daa13e",
        color: "var(--green)",
        className: "toastify-center",
        avatar: "./aseets/imgs/user-Authorize.png",
      }).showToast();
      // agr user admin hai to admin portal pe jaye ga otherwise Home page pe
      if (isAdmin) {
        window.location.replace("/admin.html");
      } else {
        window.location.replace("/");
      }
    } else {
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
  } catch (error) {
    console.error();
  }
};

document
  .getElementById("google-login-button")
  ?.addEventListener("click", _loginInWithGoogle);
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

document.addEventListener("DOMContentLoaded", function () {
  // Show Password Functionality
  document.querySelectorAll(".show-password").forEach((ele) => {
    ele.addEventListener("change", function () {
      const signupPassword = document.getElementById("signupPassword");
      if (this.checked) {
        signupPassword.type = "text";
      } else {
        signupPassword.type = "password";
      }
      const password = document.getElementById("loginPassword");
      if (this.checked) {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
  });

  // Forgot Password Functionality
  document
    .getElementById("forgot-password-link")
    ?.addEventListener("click", () => {
      document.getElementById("login-form").style.display = "none";
      document.getElementById("forgetPasswordForm").style.display = "flex";
    });
});

document.getElementById("backToLogin").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "flex";
  document.getElementById("forgetPasswordForm").style.display = "none";
});
document.getElementById("goToLogin").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "flex";
  document.getElementById("forgetPasswordForm").style.display = "none";
  document.getElementById("signUp-form").style.display = "none";
});
document.getElementById("createAccount").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("forgetPasswordForm").style.display = "none";
  document.getElementById("signUp-form").style.display = "flex";
});
