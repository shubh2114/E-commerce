import { Outlet, Link } from "react-router-dom"
import '../navigation/navigation.styles.scss'
import {ReactComponent as Crown} from "../../asset/crown.svg"
import { UserContext } from "../../components/context/User-context.component"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { CartContext } from "../../components/context/cart-context"

const Navigation = ()=> {
  const {currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)

  
    return (
      <>
      <div className="navigation">
      <Link className="logo-container" to='/'><Crown/></Link>
      <div className="nav-links-container">
      <Link className="nav-link" to='/shop'>Shop</Link>
      {currentUser ? ( <span className="nav-link" onClick={signOutUser} >SIGN OUT</span>) : ( <Link className="nav-link" to='/auth'>SIGN IN</Link>)}
      <CartIcon/>
      </div>
       {isCartOpen && <CartDropdown/> }  
      </div>
      <Outlet/>
      </>
    )
  }

  export default Navigation