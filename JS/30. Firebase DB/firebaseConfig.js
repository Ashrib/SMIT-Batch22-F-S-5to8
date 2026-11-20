  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
  import { getFirestore, collection, getDocs, addDoc,deleteDoc, doc,updateDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { collection, getDocs, db, addDoc, deleteDoc, doc,updateDoc }


