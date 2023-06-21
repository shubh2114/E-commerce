import { Outlet, Link } from "react-router-dom"
import '../navigation/navigation.styles.scss'
import {ReactComponent as Crown} from "../../asset/crown.svg"

const Navigation = ()=> {
    return (
      <>
      <div className="navigation">
      <Link className="logo-container" to='/'><Crown/></Link>
      <div className="nav-links-container">
      <Link className="nav-link" to='/shop'>Shop</Link>
      <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
      </div>
     
      
    
      </div>
      <Outlet/>
      </>
    )
  }

  export default Navigation