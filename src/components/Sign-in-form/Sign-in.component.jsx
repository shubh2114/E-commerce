import { useState } from "react"
import { createAuthUSerWithIdAndPAssword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase"
import { signInWithGooglePopup , signinwithGoogleRedirect, auth,SigninAuthUSerWithIdAndPAssword} from "../../utils/firebase/firebase"
import Forminput from "../form-input/form-input.component"
import '../Sign-in-form/Sign-in-form.styles.scss'
import Button from '../button/button.component'
import { signInWithEmailAndPassword } from "firebase/auth"

const defaultFormFields = {
 email:'',
 password:'',
}

const Signin= ()=>{
    
    const [FormFields,setFormFields]=useState(defaultFormFields)  
    const {email,password}=FormFields

const handleChange = (event)=>{
    const {name,value}=event.target
    setFormFields({...FormFields,[name]:value})
}

const handleSubmit = async (e)=>{
e.preventDefault(); 
try{
  const response= await SigninAuthUSerWithIdAndPAssword(email,password)
  console.log(response)
  resetFormFields()
}
catch(error){
if (error.code=='auth/wrong-password'){alert("wrong credentails")}
if (error.code=='auth/user-not-found'){alert("User not found")}
}}

const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
}

const  SignInWithGoogle= async ()=>{
    try{
        const {user}= await signInWithGooglePopup()
        // console.log(response)
      await createUserDocumentFromAuth(user)
    }
    catch(error){
        if (error.code=='auth/popup-closed-by-user'){
            alert('Pop up Closed by user')
        }
        // console.log(error)
    }
   
}


return(
<div className="sign-in-container">
 <h2>Already have an Account ..?</h2>   
<span>Signin with ID and password</span>
<form onSubmit={handleSubmit} >
<Forminput type="email" label='Email' required name='email' value={email} onChange={handleChange}/>
<Forminput type="password" label='Password' required name='password' value={password} onChange={handleChange}/>
<div className="buttons-container">
<Button type="submit">Sign In</Button>
<Button buttonType='google' type='button' onClick={SignInWithGoogle}>Google Sign In</Button>
</div>
</form> 
</div> 
)}

export default Signin