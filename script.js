import {db,doc,setDoc ,collection, addDoc,getDocs, deleteDoc,updateDoc} from "./firebase.js"

let addToDo = document.querySelector("#addToDo")
let toDoList = document.querySelector("#toDoList")

let toDoValue = async ()=>{
  document.querySelector(".container").style.display = "none";
 try{

   const docRef = await addDoc(collection(db, "cities"), {
     name: addToDo.value,
     
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
  toDoList.innerHTML += `<li><p>${getValue.name}</p> <button id="${doc.id}" onclick="del(this)">Delete</button><br/>
  <button id="${doc.id}" onclick="edit(this)">Edit</button></li>`
  

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
