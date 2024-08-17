 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

 import { getAuth,createUserWithEmailAndPassword ,onAuthStateChanged ,signInWithEmailAndPassword,
    signOut,sendEmailVerification ,sendPasswordResetEmail,updatePassword 
 } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js'

 import { getFirestore , doc, setDoc , collection, addDoc , getDocs , deleteDoc,updateDoc} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js'
 import { getStorage, ref, uploadBytesResumable, getDownloadURL

 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyARz77Zu75mBgR2t4HzBfn1cT6HDjHvgHw",
   authDomain: "login-1b.firebaseapp.com",
   projectId: "login-1b",
   storageBucket: "login-1b.appspot.com",
   messagingSenderId: "595818900966",
   appId: "1:595818900966:web:68c500cdfd2c7b877b7a27"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const storage = getStorage(app);
 // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

 export{
    auth,
    storage,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    db,
    doc,
    setDoc,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    ref,
     uploadBytesResumable,
      getDownloadURL ,
}