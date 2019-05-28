import React, { ChangeEvent } from "react";
import classnames from "classnames";
import {
  PasswordToggler,
  Input,
  FormControl,
  Label,
  CheckmarkIcon,
  TextMaskedInput,
  ErrorIcon,
  ErrorMessageContainer
} from "./FormInput.styles";



type inputProps = {
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  textMask?: Array<string | RegExp>;
  value: string | undefined;
  disabled?: boolean;
  id: string;
  className?: string;
}

type ownProps = {
  labelText: string;
  isDisabled?: boolean;
  error: string;
  touched: boolean;
} & inputProps;

const initialState = {
  showPassword: false
};

class FormInput extends React.PureComponent<ownProps, typeof initialState> {
  static defaultProps = {
    error: "",
    placeholder: "",
    touched: null,
    isDisabled: false
  };

  isPasswordInput: boolean;

  constructor(props: ownProps) {
    super(props);
    this.state = initialState;

    this.isPasswordInput = props.type === "password";
  }

  getInputType = () => {
    const { type } = this.props;
    const { showPassword } = this.state;

    if (!this.isPasswordInput) return type;
    return showPassword ? "text" : "password";
  };

  togglePasswordHiddenState = () =>
    this.setState({ showPassword: !this.state.showPassword });

  renderInputComponent = (inputProps: inputProps) => {
    const { textMask, ...restInputProps } = inputProps;
    if (textMask)
      return (
        <TextMaskedInput
          mask={textMask}
          {...restInputProps}
          value={restInputProps.value || ""}
        />
      );
    return <Input {...restInputProps} />;
  };

  render() {
    const {
      id,
      labelText,
      isDisabled,
      value,
      error,
      touched,
      ...restProps
    } = this.props;
    const inputType = this.getInputType();
    const isFieldPopulated = !!value;
    const isValid = !error && touched;
    const shouldShowErrorIcon = error && touched;
    const shouldShowErrorMessage = error && touched;
    const { showPassword } = this.state;
    const className = classnames({
      "show-error-icon": shouldShowErrorIcon,
      "is-populated": isFieldPopulated
    });

    const inputProps = {
      value,
      disabled: isDisabled,
      id,
      type: inputType,
      className,
      ...restProps
    };

    // TODO: Add prop validation that throws a helpful error message
    // EDIT: Just kidding, typescript does it
    return (
      <>
        <FormControl className={classnames({ "is-disabled": isDisabled })}>
          {this.renderInputComponent(inputProps)}
          <Label
            className={classnames({ "is-disabled": isDisabled })}
            htmlFor={id}
          >
            {labelText}
          </Label>
          {isValid && isFieldPopulated && <CheckmarkIcon />}
          {shouldShowErrorIcon && <ErrorIcon />}
          {this.isPasswordInput && (
            <PasswordToggler onClick={this.togglePasswordHiddenState}>
              {showPassword ? "Hide" : "Show"}
            </PasswordToggler>
          )}
        </FormControl>
        {shouldShowErrorMessage && (
          <ErrorMessageContainer>{error}</ErrorMessageContainer>
        )}
      </>
    );
  }
}

export default FormInput;
