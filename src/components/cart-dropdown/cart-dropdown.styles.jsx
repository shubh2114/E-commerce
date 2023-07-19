import { styled } from "styled-components";
import { BaseButton,InvertedButton,GooglesignInButton } from "../button/button.styles";

export const CartDropdownConainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

 

  ${BaseButton},
  ${InvertedButton},
  ${GooglesignInButton}{
    margin-top: auto;
  }
`

// this statement inside the CardDropdownContainer will be applied under all the button insdie it
 // button {
  // margin-top: auto;
  // }

// if we want to target an specific component inside the component then the syntax is
// ${component name}{the css we want to over ride or apply}
// the 
// ${BaseButton},
//   ${InvertedButton},
//   ${GooglesignInButton}{
//     margin-top: auto;
//   }


export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`


export const EmptyMessage= styled.span`
font-size: 18px;
margin: 50px auto;
` 

// .cart-dropdown-container {
  // position: absolute;
  // width: 240px;
  // height: 340px;
  // display: flex;
  // flex-direction: column;
  // padding: 20px;
  // border: 1px solid black;
  // background-color: white;
  // top: 90px;
  // right: 40px;
  // z-index: 5;

  // .empty-message {
    // font-size: 18px;
    // margin: 50px auto;
  // }

  // .cart-items {
    // height: 240px;
    // display: flex;
    // flex-direction: column;
    // overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }
