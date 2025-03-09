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

const postBtn2 = document.getElementById("post-btn2");
const textarea2 = document.getElementById("exampleFormControlTextarea2");

let currentUser;

const addCommentInteractions = (commentDiv) => {
  const likeBtn = commentDiv.querySelector(".like-btn");
  const dislikeBtn = commentDiv.querySelector(".dislike-btn");

  const counterElement = commentDiv.querySelector(".counter");
  const replyBtn = commentDiv.querySelector(".reply-btn");

  const commentPost = commentDiv.querySelector(".comment-post");
  const postBtn = commentDiv.querySelector(".post-btn");

  const userReply = commentDiv.querySelector(".user-reply");
  const textarea = commentDiv.querySelector(".comment-textarea");

  let counter = 0;

  likeBtn?.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
    likeBtn.querySelector(".like-fill").style.display = "none";
    likeBtn.querySelector(".like-outline").style.display = "inline";
    dislikeBtn.querySelector(".dislike-fill").style.display = "inline";
    dislikeBtn.querySelector(".dislike-outline").style.display = "none";
  });

  dislikeBtn?.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
    }
    counterElement.textContent = counter;
    likeBtn.querySelector(".like-fill").style.display = "inline";
    likeBtn.querySelector(".like-outline").style.display = "none";
    dislikeBtn.querySelector(".dislike-fill").style.display = "none";
    dislikeBtn.querySelector(".dislike-outline").style.display = "inline";
  });

  replyBtn?.addEventListener("click", () => {
    commentPost.style.display = "block";
    commentPost.style.outline = "none !important";
  });

  
  postBtn?.addEventListener("click", () => {
    const comment = textarea.value;

    if (comment.trim() !== "") {
      const newCommentDiv = document.createElement("div");
      newCommentDiv.classList.add("comment");
      newCommentDiv.innerHTML = `
              <div class="d-flex">
                <div class="">
                   <img src="/recipe/aseets/icons/logo2.png" class="rounded-5" width="80" alt="logo">
                </div>
                <div class="">
                  <strong class="text-dark">Yum Corner</strong>
                 <p class="text-dark mb-2">${new Date().toLocaleTimeString([], {
                   hour: "2-digit",
                   minute: "2-digit",
                 })}</p>
                </div>
              </div>
              <p class="text-dark p-1 mb-3 mb-lg-3 commentPara">${comment}</p>
    
              <div class="d-flex align-items-start justify-content-start gap-2">
                  <div class="px-2 btn">
                    &nbsp;<span style="color: var(--green) !important; font-size: 13px" class="fw-bold counter">0</span>
                  </div>
                
                  <div class="px-2 btn like-btn">
                    <span>
                      <img src="/recipe/aseets/icons/likethumb.png" alt="img" class="like-fill" width="20px" />
                      <img src="/recipe/aseets/icons/likethumb-outline.png" alt="img" class="like-outline" width="20px" />
                    </span>
                  </div>
                
                  <div class="px-2 btn dislike-btn">
                    <span>
                      <img src="/recipe/aseets/icons/dislikethumb.png" alt="img" class="dislike-fill" width="20px" />
                      <img src="/recipe/aseets/icons/dislikethumb-outline.png" alt="img" class="dislike-outline" width="20px" />
                    </span>
                  </div>
                
                  <div class="px-2 btn btn-light border reply-btn" style="border-color: var(--green)">
                    &nbsp;<span style="color: var(--green) !important; font-size: 13px">Reply</span>
                  </div>
                </div>
                
                <div class="pt-3 pb-3 mt-3 mb-3 comment-post" style="display: none">
                  <div class="mb-3">
                    <textarea class="form-control comment-textarea" rows="3" style="border: none !important; outline: none !important"></textarea>
                  </div>
                  <div class="text-end">
                    <button class="px-3 btn border post-btn" style="background-color: #daa13e !important; color: rgb(255, 255, 255) !important; font-size: 15px; float: right !important;">
                      Post
                    </button>
                  </div>
                </div>
                
                <div class="reply text-dark mt-3">
                  <div class="reply-user" style="color: var(--green) !important">
                    <p class="text-dark p-1 mb-3 mb-lg-3 user-reply"></p>
                  </div>
                </div>
            `;
      userReply.appendChild(newCommentDiv);
      addCommentInteractions(newCommentDiv);
      textarea.value = "";
      commentPost.style.display = "none";
    } else {
      console.log("Please fill the comment first.");
    }
  });
};

postBtn2?.addEventListener("click", () => {
  const comment = textarea2.value;


  
  // ------------------------------onAuthStateChanged--------------------------------
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in");
  
      getDocs(collection(db, "foodies")).then((querySnapshot) => {
        let userFound = false;
        
        querySnapshot.forEach((doc) => {
          if (user.uid === doc.id) {
            console.log("user mil gya");
            currentUser = doc.data().signUserName;
            console.log(currentUser);
            
            document.getElementById("currentUser").textContent = currentUser;
            
            userFound = true;
          }
        });
  
        if (!userFound) {
          Toastify({
            text: "User is not signed in",
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
    } else {
      console.log("User is not signed in");
    }
  });

  if (comment.trim() !== "") {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
          <div class="d-flex">
            <div class="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" class="rounded-5" width="40" alt="User">
            </div>
            <div class="ms-3">
              <strong class="text-dark" id="currentUser"></strong>
              <p class="text-dark mb-2">${new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}</p>
            </div>
          </div>
          <p class="text-dark p-1 mb-3 mb-lg-3 commentPara">${comment}</p>
          
          <div class="d-flex align-items-start justify-content-start gap-2">
              <div class="px-2 btn">
                &nbsp;<span style="color: var(--green) !important; font-size: 13px" class="fw-bold counter">0</span>
              </div>
            
              <div class="px-2 btn like-btn">
                <span>
                  <img src="/recipe/aseets/icons/likethumb.png" alt="img" class="like-fill" width="20px" />
                  <img src="/recipe/aseets/icons/likethumb-outline.png" alt="img" class="like-outline" width="20px" />
                </span>
              </div>
            
              <div class="px-2 btn dislike-btn">
                <span>
                  <img src="/recipe/aseets/icons/dislikethumb.png" alt="img" class="dislike-fill" width="20px" />
                  <img src="/recipe/aseets/icons/dislikethumb-outline.png" alt="img" class="dislike-outline" width="20px" />
                </span>
              </div>
            
              <div class="px-2 btn btn-light border reply-btn" style="border-color: var(--green)">
                &nbsp;<span style="color: var(--green) !important; font-size: 13px">Reply</span>
              </div>
            </div>
            
            <div class="pt-3 pb-3 mt-3 mb-3 comment-post" style="display: none">
              <div class="mb-3">
                <textarea class="form-control comment-textarea" rows="3" style="border: none !important; outline: none !important"></textarea>
              </div>
              <div class="text-end">
                <button class="px-3 btn border post-btn" style="background-color: #daa13e !important; color: rgb(255, 255, 255) !important; font-size: 15px; float: right !important;">
                  Post
                </button>
              </div>
            </div>
            
            <div class="reply text-dark mt-3">
              <div class="reply-user" style="color: var(--green) !important">
                <p class="text-dark p-1 mb-3 mb-lg-3 user-reply"></p>
              </div>
            </div>
        `;
    document.getElementById("randomComments").appendChild(commentDiv);
    addCommentInteractions(commentDiv);
    textarea2.value = "";
  } else {
    console.log("Please fill the comment first.");
  }
});
