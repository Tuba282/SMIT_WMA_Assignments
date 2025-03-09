import {
  auth,
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp,
  Timestamp,
  updateDoc,
  deleteDoc,
} from "./firebaseConfig.js";

const userTableBody = document.getElementById("userTableBody");

const userRef = collection(db, "foodies");
const unsub = onSnapshot(userRef, (snapshot) => {
  userTableBody.innerHTML = "";
  let count = 1;
  snapshot.forEach((doc) => {
    const user = doc.data();
    userTableBody.innerHTML += `
    <tr>
    <td scope="row" class="fw-bold SNo.">${count}</td>
    <td class="Name">${user.signUserName}</td>
    <td class="Email">${user.signupEmail}</td>
    <td class="Contact">${user.signupContact}</td>
    <td class="TimeStamp">${user.timestamp}</td>
    <td class="User-Admin fw-bold">${user?.isAdmin ? "Admin" : "User"}</td>
    <td class="Status">${user?.isActive ? "Active" : "Block"}</td>
    <td class="Action">
    <button class="trBtn" onclick="editRow('${doc.id}', '${user.signUserName}', '${user.signupEmail}', '${user.signupContact}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
    <button class="trBtn" onclick="deleteRow(this,'${doc.id}')">Del</button>
    </td>
    </tr>
    `;
    count += 1;
  });
});
// delete Row
window.deleteRow = async function (ele,id) {
  ele.parentNode.parentNode.remove();
  try{
    await deleteDoc(doc(db, "foddies",id))
  Toastify({
    text: "User has been deleted from firestore",
    duration: 1500,
    delay: 1000,
    gravity: "top",
    position: "center",
    backgroundColor: "#daa13e",
    color: "var(--green)",
    className: "toastify-center",
    avatar: "./aseets/imgs/user-Authorize.png",
  }).showToast();
  }catch(error){
    console.log(error.message);
    
  }
  
};
// Edit Row

window.editRow = function (id, changedName, changedEmail, changedContact) {
  // Set form fields with current data
  document.getElementById("editName").value = changedName;
  document.getElementById("editEmail").value = changedEmail;
  document.getElementById("editContact").value = changedContact;

  const form = document.getElementById("editForm");

  // Remove any previous event listeners to avoid duplicate submissions
  form.removeEventListener("submit", handleSubmit);

  // Add the event listener for form submission
  form.addEventListener("submit", handleSubmit);

  async function handleSubmit(e) {
    e.preventDefault();

    const userRef = doc(db, "foodies", id);
    const editName = document.getElementById("editName").value;
    const editEmail = document.getElementById("editEmail").value;
    const editContact = document.getElementById("editContact").value;

    const modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));
    modal.hide();
    try {
      await updateDoc(userRef, {
        signUserName: editName,
        signupEmail: editEmail,
        signupContact: editContact,
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
        avatar: "./aseets/imgs/user-Authorize.png",
      }).showToast();
    }
  }
};

  
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
