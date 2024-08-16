import { app } from "./scripts/firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const auth = getAuth(app);

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let create_acc = document.querySelector("#create-acc");

if (create_acc) {
  create_acc.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("account register succesfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log("account Register Failed");
      });
  });
}

let lemail = document.querySelector("#lemail");
let lpassword = document.querySelector("#lpassword");
let loginBtn = document.querySelector("#login-acc");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login succesfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log("sorry login failed");
      });
  });
}












((p1,p2)=>{
   console.log(p1+p2);
})(5,6)
