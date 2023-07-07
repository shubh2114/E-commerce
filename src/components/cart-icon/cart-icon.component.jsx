import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const CartIcon = ()=>{
const{isCartOpen,setIsCartOpen}=useContext(CartContext)
const isToggleCartOpen = ()=>{
    setIsCartOpen(!isCartOpen)
}
 return(
    <div className='cart-icon-container' onClick={isToggleCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>10</span>
    </div>
 )
}

export default CartIcon