import {BaseButton,InvertedButton,GooglesignInButton} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base:'base',
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>( 
//  this is the map object and will return the value as per the button type.. by default we have given the value of buttonType as base.
  {
  [BUTTON_TYPE_CLASSES.base] : BaseButton,
  [BUTTON_TYPE_CLASSES.google] : GooglesignInButton,
  [BUTTON_TYPE_CLASSES.inverted] : InvertedButton
  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton {...otherProps} >
      {children}
    </CustomButton>
  );
};

export default Button;
