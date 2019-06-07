import React from "react";
import { NavBarWrapper } from "./NavBar.styles";
import ExampleDisplayUserDetails from '../../../user/components/ExampleDisplayUserDetails';

type ownProps = {};

const NavBar: React.FC<ownProps> = props => (
  <NavBarWrapper>
    This is a nav bar
    <ExampleDisplayUserDetails />
  </NavBarWrapper>
);

export default NavBar;
