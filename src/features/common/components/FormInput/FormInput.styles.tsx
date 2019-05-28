import styled, { css } from "styled-components";
import MaskedInput from "react-text-mask";
import Checkmark from "../Icons/Checkmark";
import FormErrorIcon from "../Icons/FormErrorIcon";

const labelOffSetWhenFocusedAndPopulated = "-25px";
const iconOffSet = "9px";

export const CheckmarkIcon = styled(Checkmark)`
  color: ${props => props.theme.carvana.green.primary};
  position: absolute;
  top: ${iconOffSet};
  right: ${iconOffSet};
  width: 24px;
  height: 24px;
`;

export const PasswordToggler = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  font-weight: 600;
  color: ${props => props.theme.carvana.blue.primary};
  font-size: 14px;
  right: 9px;
  bottom: 9px;

  &:hover {
    display: block;
  }
`;

export const ErrorIcon = styled(FormErrorIcon)`
  color: ${props => props.theme.carvana.red.primary};
  width: 24px;
  height: 24px;
  position: absolute;
  top: ${iconOffSet};
  right: ${iconOffSet};
  width: 24px;
  height: 24px;
`;

const hideValdiationIconsWhenFocused = css`
  &:focus ~ ${CheckmarkIcon} {
    display: none;
  }
`;

const showPasswordToggleWhenFocused = css`
  &:focus ~ ${PasswordToggler}, &:hover ~ ${PasswordToggler} {
    display: block;
  }
`;

export const FormControl = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 60px;
  background-color: ${props => props.theme.carvana.white.primary};

  &.is-disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.carvana.gray.background};
  }
`;

const inputCss = css`
  background: ${props => props.theme.carvana.white.primary};
  border: 1px solid ${props => props.theme.carvana.gray.light};
  padding: 1rem 1rem 0 1rem;
  flex: 1;
  border-radius: 3px;
  outline: none;

  &:disabled {
    cursor: not-allowed;
    background: ${props => props.theme.carvana.gray.background};
  }

  &:focus {
    border: 1px solid ${props => props.theme.carvana.blue.primary};
  }

  &:focus ~ label {
    top: ${labelOffSetWhenFocusedAndPopulated};
    font-size: 10px;
    color: ${props => props.theme.carvana.blue.primary};
  }

  ${hideValdiationIconsWhenFocused}
  ${showPasswordToggleWhenFocused}

  &.show-error-icon {
    border-color: ${props => props.theme.carvana.red.primary};

    ~ label {
      color: ${props => props.theme.carvana.red.primary};
    }
  }

  &.is-populated {
    & ~ label {
      top: ${labelOffSetWhenFocusedAndPopulated};
      font-size: 10px;
    }
  }
`;

export const TextMaskedInput = styled(MaskedInput)`
  ${inputCss}
`;

export const Input = styled.input`
  ${inputCss}
`;

export const Label = styled.label`
  display: flex;
  font-size: 14px;
  position: absolute;
  pointer-events: none;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 1rem;
  cursor: text;
  margin: 0px auto;
  text-transform: uppercase;
  transition: all 0.15s ease-in-out;
  color: ${props => props.theme.carvana.gray.dark};
  font-weight: 600;

  &.is-disabled {
    cursor: not-allowed;
    color: ${props => props.theme.carvana.gray.light};
  }
`;

export const ErrorMessageContainer = styled.div`
  color: ${props => props.theme.carvana.red.primary};
  font-weight: 200;
  font-size: 12px;
  margin-top: 2px;
`;
