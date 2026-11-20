import { getAuth, createUserWithEmailAndPassword } from "./firebaseConfig.js";

const auth = getAuth();

let validateForm = ()=>{

    // if()
    // if()
    // if() errr
        // return false
    // if()

    return true

}

let registerUser = async () => {
    try {

        if(!validateForm()){
            alert("fill the form correctly")
            return
        }

        await createUserWithEmailAndPassword(auth, "abc@xyz.com", "123456")
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user successfully created => ", user);
            });
           
    } catch (error) {
        console.error(error);
    }
}

document.querySelector("#createUser-btn").addEventListener("click", ()=> registerUser());


