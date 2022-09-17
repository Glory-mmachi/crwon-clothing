import { initializeApp } from "firebase/app";

//for authentication
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

//For aunthentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

//using firestore to store the data.

//initialize the service
export const db = getFirestore(); //database(db) is used to get the database in firestor

export const craeteUserDocumentFRomAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  //getting the collection reference(like an ID)
  const userDocRef = doc(db, "users", userAuth.uid); //database(db),users collection, users' ID(uid)
  console.log(userDocRef);

  //get the collection document data
  const userSnapshot = await getDoc(userDocRef); //returns a promise

  console.log(userSnapshot); //userSnapshot has acces to all of the document in the collection
  console.log(userSnapshot.exists()); //checks if the doc exist in the collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }
};

export const createAuhtUserWithGoogleEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};
