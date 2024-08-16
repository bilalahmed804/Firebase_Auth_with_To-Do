import {auth, createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword,
    signOut,sendEmailVerification,sendPasswordResetEmail,updatePassword
} from "./firebase.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
      console.log(user);
      
    } else {
     alert("User Not exit")
    }
  });
  let logIn$ = ()=>{
      let email = document.querySelector("#email");
      let password = document.querySelector("#password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
});
}
let logIn = document.querySelector("#logIn")

logIn.addEventListener("click", logIn$)

let signUp = () =>{
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
  });
}

let signUpBtn = document.querySelector(".signUp")

signUpBtn.addEventListener("click",signUp)


let logOutBtn = () =>{
    
    signOut(auth).then(() => {
        console.log("User Logout succfully");
        
    }).catch((error) => {
        console.log(error);
        
    });
}
let logOutBtn2 = document.querySelector("#logOutBtn")

logOutBtn2.addEventListener("click",logOutBtn)


let verifyBtn = document.querySelector("#verifyBtn")

verifyBtn.addEventListener("click",()=>{

    sendEmailVerification(auth.currentUser)
    .then(() => {
        console.log("Send");
        
    });
    
})

let resetBtn = document.querySelector("#resetBtn")


resetBtn.addEventListener("click",()=>{
    let email = document.querySelector("#email")
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    alert("Password reset email sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    
  });
})

// let random = Date.now().toString(25)
// console.log(random);
// let updateBtn = document.querySelector("#updateBtn");

// let updatePass = ()=>{
//   const user = auth.currentUser;
  
//   let random = 87587587588765
//     const newPassword = getASecureRandomPassword(random);

    
//     updatePassword(user, newPassword).then(() => {
//         alert("Update successful")
//     }).catch((error) => {
//         console.log(error);
        
//     });
// }

// updateBtn.addEventListener("click",updatePass)

