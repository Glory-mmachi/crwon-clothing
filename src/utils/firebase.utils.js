import { initializeApp } from "firebase/app";

//for authentication
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//for storing data in firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5G7dL-G7VZjCGd7GXzxpJ-kvcDKgOgZo",
  authDomain: "crown-clothing-db-4b117.firebaseapp.com",
  projectId: "crown-clothing-db-4b117",
  storageBucket: "crown-clothing-db-4b117.appspot.com",
  messagingSenderId: "7361520254",
  appId: "1:7361520254:web:c5a59f5b5cbbfa3d406e2f",
  measurementId: "G-CNWEL4HL7X",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//For aunthentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//using firestore to store the data.
export const db = getFirestore();

export const craeteUserDocumentFRomAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }
};
