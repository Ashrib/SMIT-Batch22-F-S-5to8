import { getDocs, collection, db, addDoc, deleteDoc, doc, updateDoc } from "./firebaseConfig.js";

/// API - methods
/// get
/// post (create data) ,,, body pass

let usersData = []

let usersBoxElm = document.querySelector("#users-box")


let renderUsers = () => {  /// render users 
    usersBoxElm.innerHTML = ''
    usersData.map((userObj) => {
        let userBox = document.createElement('div');
        userBox.innerHTML = `
        <span>${userObj.username}</span>
        `
        //del btn
        let delBtn = document.createElement("button");
        delBtn.innerText = "del"
        delBtn.addEventListener("click", () => deleteUser(userObj.id));
        //update btn
        let updateBtn = document.createElement("button");
        updateBtn.innerText = "update"
        updateBtn.addEventListener("click", () => updateUser(userObj.id));

        userBox.appendChild(delBtn)
        userBox.appendChild(updateBtn)
        usersBoxElm.appendChild(userBox)

    });

}


let fetchUsers = async () => {  /// read data
    try {
        usersData = []
        const querySnapshot = await getDocs(collection(db, "users")); /// []

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data());
            usersData.push({
                ...doc.data(), id: doc.id
            });
        });
        console.log(usersData)
    } catch (error) {
        console.error(error)
    }

}


fetchUsers().then(() => {
    renderUsers();
})


let addUser = async () => {  /// create user
    try {
        let usernameInp = document.querySelector("#username");
        let ageInp = document.querySelector("#age");

        //// validation
        if (!usernameInp || !age) {
            alert("please fill all the fields")
            return
        }

        const docRef = await addDoc(collection(db, "users"), {
            username: usernameInp.value,
            age: parseInt(ageInp.value)
        });
        usernameInp.value = "";
        ageInp.value = "";
        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
document.querySelector("#add-btn").addEventListener('click', addUser)


/// delete 
let deleteUser = async (uid) => {
    try {
        await deleteDoc(doc(db, "users", uid));
        /// remove user obj from array
        usersData = usersData.filter((user) => user.id != uid);
        renderUsers();

        console.log("user successfully deleted");
    } catch (error) {
        console.error(error)
    }
}



///update
let updateUser = async (uid) => {
    try {
        const docRef = doc(db, "users", uid);

        await updateDoc(docRef, {
            username: "user 0"
        });

        usersData.forEach((userObj)=>{
            if(userObj.id == uid){
                userObj.username = "user 0"
            }
        })
        renderUsers();

        // usersData.find() /// {}
        // fetchUsers().then(() => {
        //     renderUsers()
        // });


        console.log("user updated successfully")
    } catch (error) {
        console.error(error)
    }
}



