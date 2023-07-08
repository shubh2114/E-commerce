import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection,  writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBneVmf4vzvF6H4M2GV3hs_ezF119eomSQ",
  authDomain: "crown-db-2114.firebaseapp.com",
  projectId: "crown-db-2114",
  storageBucket: "crown-db-2114.appspot.com",
  messagingSenderId: "969173331999",
  appId: "1:969173331999:web:f09bef853034e10f30652a"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionkey, objectsToAdd)=>{
const collectionRef= collection(db,collectionkey);
const batch=writeBatch(db);

objectsToAdd.forEach((object)=>{
  const docRef=doc(collectionRef,object.title.toLowerCase());
  batch.set(docRef,object)
})
await batch.commit();
console.log('done')
}




export const getCategoriesAndDocuments = async ()=>{
const collectionRef=collection( db,'categories')
const q =query(collectionRef);

const querySnapshot=await getDocs(q);
// console.log(querySnapshot.docs)
const categoryMap = querySnapshot.docs.reduce((acc,docsSnapshot)=>{
const {title,items}=docsSnapshot.data();
acc[title.toLowerCase()]=items
// console.log(acc)
return acc
},{})
// console.log(categoryMap)
return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
