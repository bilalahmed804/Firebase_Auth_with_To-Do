import {db,doc,setDoc ,collection, addDoc,getDocs, deleteDoc,updateDoc,storage,
  ref, uploadBytesResumable, getDownloadURL
} from "./firebase.js"

let addToDo = document.querySelector("#addToDo")
let addToDo2 = document.querySelector("#addToDo2")
let toDoList = document.querySelector("#toDoList")
let cost = document.querySelector("#cost")

let toDoValue = async ()=>{
  document.querySelector(".container").style.display = "none";
  let file = document.querySelector("#file")
  const storageRef = ref(storage, `images${file.files[0].name}`);

const uploadTask = uploadBytesResumable(storageRef, file.files[0]);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
  console.log(error);
    
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
 try{

   const docRef = await addDoc(collection(db, "cities"), {
     name: addToDo.value,
     description:addToDo2.value,
     cost:cost.value,
     image:file.files[0].name
     
    });
    console.log("Document written with ID: ", docRef.id);
  }catch(error){
    console.log(error);
    
  }finally {
    document.querySelector(".container").style.display = "block";
    
    setTimeout(()=>{
      window.location.reload()

    },5000)
  }
    
  addToDo.value = "";
}

let showDoc = document.querySelector("#showDoc")

let addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click",toDoValue)

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach(async (doc) => {
  let getValue = doc.data()
  toDoList.innerHTML += `<li>
  <div class="card">
    <div class="card-image">
        <img src="https://via.placeholder.com/150" alt="Card Image">
    </div>
    <div class="card-content">
        <h2 class="card-title">${getValue.name}</h2>
        <p class="card-description">${getValue.description}.</p>
        <p class="card-cost">${getValue.cost}</p>
        <button id="${doc.id}" onclick="del(this)">Delete</button>
        <button id="${doc.id}" onclick="edit(this)">Edit</button>
    </div>
</div>
</li>`
  

  });
  console.log(querySnapshot);
  document.querySelector(".container").style.display = "none";
 
  async function del(e) {
   
     try{
     await deleteDoc(doc(db, "cities",e.id));
     
   } catch(error){
     console.log("error",error);
    
   }  finally {
    document.querySelector(".container").style.display = "block";
    setTimeout(()=>{
      window.location.reload()

    },5000)
  }

  }
  async function edit(e) {
    const toDoRef = doc(db, "cities", e.id);
   
     try{

      // Set the "capital" field of the city 'DC'
      await updateDoc(toDoRef, {
        name: prompt("update value")
      });
     
   } catch(error){
     console.log("error",error);
    
   }  finally {
    document.querySelector(".container").style.display = "block";
    setTimeout(()=>{
      window.location.reload()

    },5000)
  }

  }



window.del = del;
window.edit = edit;
