import React from "react";
import { LayoutWrapper } from "./Layout.styles";
import NavBar from "../NavBar/index";
import CreateAccountForm from '../../../user/components/CreateAccountForm'

type ownProps = {};

const Layout: React.FC<ownProps> = () => (
  <LayoutWrapper>
    <NavBar />
    <CreateAccountForm />
  </LayoutWrapper>
);

export default Layout;
