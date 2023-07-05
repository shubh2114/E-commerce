import { useState,createContext , useEffect} from "react";
import { onAuthChangedListener, signOutUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


export const UserContext=createContext({
currentUser: null,
setCurrentUser: ()=>{return null}
});



export const UserProvider= ({children})=>{
const [currentUser,setCurrentUser]=useState(null)
const value={currentUser,setCurrentUser}
// signOutUser()

useEffect(()=>{
    // console.log('its useEffect')
    const unsubscribe=onAuthChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        console.log(user)
        setCurrentUser(user)
    })
    return unsubscribe
    },[])

return <UserContext.Provider value={value}>{children} </UserContext.Provider>

}