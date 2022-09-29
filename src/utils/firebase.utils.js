import { initializeApp } from "firebase/app";

//for authentication
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//for storing data in firestore
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

////////////////////
//For aunthentication
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); //used to get an instance
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

//////////////////////
//USING FIRESTORE TO STORE THE DATA
//initialize the service
export const db = getFirestore(); //database(db) is used to get the database in firestore

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((Object) => {
    const docRef = doc(collectionRef, Object.title.toLowerCase());
    batch.set(docRef, Object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, quaryDoc) => {
    const { title, items } = quaryDoc.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const craeteUserDocumentFRomAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  //getting the collection reference(like an ID)
  const userDocRef = doc(db, "users", userAuth.uid); //database(db),users collection, users' ID(uid)

  //get the collection document data
  const userSnapshot = await getDoc(userDocRef); //returns a promise

  // console.log(userSnapshot); //userSnapshot has acces to all of the document in the collection
  // console.log(userSnapshot.exists()); //checks if the doc exist in the collection
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

export const signOutUser = async () => {
  await signOut(auth);
};
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
