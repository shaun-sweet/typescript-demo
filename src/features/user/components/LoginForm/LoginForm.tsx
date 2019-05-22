import React from 'react';
import PropTypes from 'prop-types';
import { LoginFormWrapper } from './LoginForm.styles';

const LoginForm: React.FC<{
  test: string
}> = props => (
  <LoginFormWrapper>
    This is a LoginForm
  </LoginFormWrapper>
);

export default LoginForm;
