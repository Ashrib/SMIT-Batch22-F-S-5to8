import { collection, db, onSnapshot } from "./firebaseConfig.js";



//// realtime connection
const unsubscribe  = onSnapshot(collection(db, "users"), (querySnapshot) => {
    let users = []
    querySnapshot.forEach(doc => {
        users.push({
            ...doc.data(), id: doc.id
        })
    });
    
    console.log("Current users: ", users);

});


document.querySelector("#back-btn").addEventListener("click",()=>{
    unsubscribe(); //// detach listening

    window.location.assign("./index.html")

})


