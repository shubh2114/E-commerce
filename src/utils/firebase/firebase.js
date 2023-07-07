// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth, 
  signInWithRedirect,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged

 

} from 'firebase/auth'

// -------------------------------------------------------------------------------------
// importing for the firebase database
import {getFirestore,doc,setDoc,getDoc} from 'firebase/firestore'
// -------------------------------------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBneVmf4vzvF6H4M2GV3hs_ezF119eomSQ",
  authDomain: "crown-db-2114.firebaseapp.com",
  projectId: "crown-db-2114",
  storageBucket: "crown-db-2114.appspot.com",
  messagingSenderId: "969173331999",
  appId: "1:969173331999:web:f09bef853034e10f30652a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// select the provider here it can be google linkedin facebook
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

// create the instance of authentication and then  add the provider and instance of authentication with the method of signin . in this case it is signinwithpopup...it can also be signinwithredirect
export const auth= getAuth();
export const signInWithGooglePopup = ()=> {return signInWithPopup(auth,provider)}
// export const signinwithGoogleRedirect = ()=> signInWithRedirect(auth,provider)


// id and password se humko pehle user banana pdega phr sign in krna pdega...unlike in above method
// ------------create authenticated user with id and password--------------------------------------
export const createAuthUSerWithIdAndPAssword= async(email,password)=>{
  if(!email || !password) return;
 return await createUserWithEmailAndPassword(auth,email,password)
}

// ------sign in user with email id and password---------------------------------------------

export const SigninAuthUSerWithIdAndPAssword= async(email,password)=>{
  if(!email || !password) return;
 return await signInWithEmailAndPassword(auth,email,password)
}

// --------------------Sign out method---------------------------------------------------

export const signOutUser = async ()=>{
 await signOut(auth)
}



// ---------------------database----------------------------------------------------------

// create the instance of the database
export const db=getFirestore()

// create the reference of the user from the data we get after the authentication.
// document will be created with the help of the database name (here its db), the collection name and the ///uid which we get from the authentication

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={})=>{
  if(!userAuth) return;
  const userDocRef= doc(db,'users',userAuth.uid)
  // console.log(userDocRef);

  // using the reference we will try to get is data from firebase using getDoc. if data not found then we are creating the document using setDoc

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot)
  // console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){ 
    const createdAt=new Date()
    const {displayName, email}=userAuth;
    try{
      await setDoc(userDocRef,{displayName,email,createdAt, ...additionalInformation})
    }
    catch (error){
      console.log(error)
    }
  }
  return userDocRef
}

// -----------------on auth change listener------------------------------------------------

export const onAuthChangedListener = (callback)=>{
onAuthStateChanged(auth,callback)
}



