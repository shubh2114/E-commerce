import styled, {css} from 'styled-components';
const subcolor = 'grey';
const maincolor = 'black';

const shrinkLabelStyles= css`
  top: -14px;
  font-size: 12px;
  color: ${maincolor};
`

export const Group= styled.div`
  position: relative;
  margin: 45px 0;
` 

export const FormInputLabel = styled.label`
    color: ${subcolor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({shrink})=> shrink && shrinkLabelStyles} 
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subcolor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subcolor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel}{
    ${shrinkLabelStyles}
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`



  // .form-input {
    

  //   &:focus ~ .form-input-label {
  //     @include shrinkLabel();
  //   }
  // }

  // input[type='password'] {
  //   letter-spacing: 0.3em;
  // }

  // .form-input-label {
  //   color: $sub-color;
  //   font-size: 16px;
  //   font-weight: normal;
  //   position: absolute;
  //   pointer-events: none;
  //   left: 5px;
  //   top: 10px;
  //   transition: 300ms ease all;

  //   &.shrink {
  //     @include shrinkLabel();
  //   }
  // }

