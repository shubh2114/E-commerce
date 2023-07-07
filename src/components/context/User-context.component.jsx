import { useState,createContext , useEffect} from "react";
import { onAuthChangedListener, signOutUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


export const UserContext=createContext({
currentUser: null,
setCurrentUser: ()=>{return null}
});


// console.log('user context page')
export const UserProvider= ({children})=>{
const [currentUser,setCurrentUser]=useState(null)
const value={currentUser,setCurrentUser}
// signOutUser()

useEffect(()=>{
    // use effect ek hi bar chalega usme wo initialise krdega onAuthChangelistener ko...ab iske bd jb b auth change hoga to onAuthStateChanged run krega or call back call krega  
    // console.log('its useEffect')
    const unsubscribe=onAuthChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        // console.log(user)
        setCurrentUser(user)
    })
    return unsubscribe
    },[])

return <UserContext.Provider value={value}>{children} </UserContext.Provider>

}