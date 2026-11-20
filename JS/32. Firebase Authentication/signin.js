import { getAuth, signInWithEmailAndPassword } from "./firebaseConfig.js";

const auth = getAuth();

let signinUser = async () => {
    try {
        await signInWithEmailAndPassword(auth, "abc@xyz.com", "123456")
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("login successfully => ", user)
            });

    } catch (error) {
        console.error(error);
    }
}

document.querySelector("#siginUser-btn").addEventListener("click", () => signinUser())