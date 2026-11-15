import { getDocs, collection, db, addDoc, deleteDoc, doc, updateDoc, query, where } from "./firebaseConfig.js";




///// simple query
let queryData = async(search)=>{
    try {
        let q = query(collection(db, "users"), where("username", "==", search));
        let usersDocs = await getDocs(q);

        let queryUsers = [];
        usersDocs.forEach((doc)=>{
           queryUsers.push(doc.data())
        })
        console.log("query user => ", queryUsers)

    } catch (error) {
        console.error(error)
    }
}



document.querySelector("#search-inp").addEventListener('input', (e)=>{
    
    if(e.target.value.length > 2){
        queryData(e.target.value);
    } 
    console.log(true)
})
