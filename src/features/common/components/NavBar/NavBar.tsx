import React from "react";
import PropTypes from "prop-types";
import { NavBarWrapper } from "./NavBar.styles";

type ownProps = {};

const NavBar: React.FC<ownProps> = props => (
  <NavBarWrapper>This is a NavBar</NavBarWrapper>
);

export default NavBar;
