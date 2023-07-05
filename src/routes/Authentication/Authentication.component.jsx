
import './Authentication.styles.scss'
import Signup from "../../components/Sign-up/Sign-up.component"
import Signin from "../../components/Sign-in-form/Sign-in.component"



const Authentication = ()=>{
   
    // useEffect(  ()=>{
    //          const getUSer= async ()=>{
    //         const response= await getRedirectResult(auth)
    //         if(response){
    //          const userDocref=await createUserDocumentFromAuth(response.user)
    //         } }
    //         getUSer()
    // },[]);
    
    return (
        <div className="authentication-container">
      
        <Signin/>
        {/* <button onClick={signinwithGoogleRedirect}>Sign in with Google Popup</button> */}
        <Signup/>
        </div>
    )
}

export default Authentication