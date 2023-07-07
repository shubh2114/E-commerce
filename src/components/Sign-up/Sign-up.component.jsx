import { useState } from "react"
import { createAuthUSerWithIdAndPAssword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase"
import Forminput from "../form-input/form-input.component"
import '../Sign-up/Sign-up-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const Signup= ()=>{
    
    const [FormFields,setFormFields]=useState(defaultFormFields)  
    const {displayName,email,password,confirmPassword}=FormFields


// console.log(FormFields)



const handleChange = (event)=>{
    const {name,value}=event.target
    setFormFields({...FormFields,[name]:value})
}

const handleSubmit = async (e)=>{
e.preventDefault();
if(password!=confirmPassword){
    alert("the passwords do not match")
    return
}
try{
    const {user}= await createAuthUSerWithIdAndPAssword(email,password)

    const userDocref=await createUserDocumentFromAuth(user,{displayName})
    // console.log(response)
    resetFormFields()
}
catch(error){
    if(error.code=="auth/email-already-in-use"){
        alert("user already registered")
    }
    console.log(error)
}
}

const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
}



return(
<div className="sign-up-container">
 <h2>Dont Have an Account ..?</h2>   
<span>Signup with ID and password</span>
<form onSubmit={handleSubmit} >
{/* on submit always runs on the callback..it is not same with the onClick ...onClick does not require callback */}

<Forminput type="text" label='Display Name'  required name='displayName' value={displayName} onChange={handleChange}/>

<Forminput type="email" label='Email'  required name='email' value={email} onChange={handleChange}/>

<Forminput type="password" label='Password' required name='password' value={password} onChange={handleChange}/>

<Forminput type="password" label='Confirm Password' required name='confirmPassword' value={confirmPassword} onChange={handleChange}/>

<Button type="submit">Sign Up</Button>
</form>
</div>
)}

export default Signup