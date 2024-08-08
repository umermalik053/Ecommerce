
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBXGVRGF9A84_tMSJw0eHNoaqDJ2qIeMnI",
    authDomain: "ecommerce-ee910.firebaseapp.com",
    projectId: "ecommerce-ee910",
    storageBucket: "ecommerce-ee910.appspot.com",
    messagingSenderId: "538725033874",
    appId: "1:538725033874:web:24fa26440170dfc2ce434b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export {app}

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // import { getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBXGVRGF9A84_tMSJw0eHNoaqDJ2qIeMnI",
  //   authDomain: "ecommerce-ee910.firebaseapp.com",
  //   projectId: "ecommerce-ee910",
  //   storageBucket: "ecommerce-ee910.appspot.com",
  //   messagingSenderId: "538725033874",
  //   appId: "1:538725033874:web:24fa26440170dfc2ce434b"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);


  // let name = document.querySelector("#name")
  // let email = document.querySelector("#email")
  // let password = document.querySelector("#password")
  // let create_acc = document.querySelector("#create-acc")
  // let login = document.querySelector("#login-acc")

  // console.log(lemail, lpassword)


 

  // // create_acc.addEventListener("click",()=>{
  // //   console.log(name.value)
  // //   console.log(email.value)
  // //   console.log(password.value)

  // //   createUserWithEmailAndPassword(auth, email.value, password.value)
  // // .then((userCredential) => {
  // //   // Signed up 
  // //   const user = userCredential.user;
  // //   console.log("user--->",user)
  // //   // ...
  // // })
  // // .catch((error) => {
  // //   const errorCode = error.code;
  // //   const errorMessage = error.message;
  // //   console.log("err--->",errorMessage)
  // //   // ..
  // // });


  // // })


  
  // // login.addEventListener("click" , ()=>{
  // //   let e = email.value;
  // //   let pass = password.value
  // //   signInWithEmailAndPassword(auth, e, pass)
  // // .then((userCredential) => {
  // //   // Signed in 
  // //   const user = userCredential.user;
  // //   console.log(user);
  // //   // ...
  // // })
  // // .catch((error) => {
  // //   const errorCode = error.code;
  // //   const errorMessage = error.message;
  // //   console.log(errorMessage);
    
  // // });
  // // })









