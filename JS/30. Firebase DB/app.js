import { getDocs, collection, db, addDoc } from "./firebaseConfig.js";

/// API - methods
/// get
/// post (create data) ,,, body pass

let fetchUsers = async () => {  /// read data
    try {
        const querySnapshot = await getDocs(collection(db, "users")); /// []

        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });

    } catch (error) {
        console.error(error)
    }

}

fetchUsers()


let addUser = async () => {
    try {

        const docRef = await addDoc(collection(db, "users"), {
            username: 'user2',
            age: 30
        });


        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


document.querySelector("#add-btn").addEventListener('click', addUser)


