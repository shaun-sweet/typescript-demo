import React from 'react';
import PropTypes from 'prop-types';
import { NavBarWrapper } from './NavBar.styles';

type ownProps = {
  displayText: string
}

const NavBar: React.FC<ownProps> = props => (
  <NavBarWrapper color='red'>
    This is a NavBar
  </NavBarWrapper>
);

export default NavBar;
