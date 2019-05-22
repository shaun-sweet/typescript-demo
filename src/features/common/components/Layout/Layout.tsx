import React from "react";
import { LayoutWrapper } from "./Layout.styles";
import LoginForm from "../../../user/components/LoginForm";
import { connect } from "react-redux";
import MyTypes from "MyTypes";
import { userSelectors } from "../../../user/ducks";

type ownProps = {} & ReturnType<typeof mapStateToProps>;

const Layout: React.FC<ownProps> = ({ isUserNotLoggedIn }) => (
  <LayoutWrapper>
    {isUserNotLoggedIn && <LoginForm />}
    This is a Layout omg
  </LayoutWrapper>
);

const mapStateToProps = (state: MyTypes.RootState) => {
  return {
    isUserNotLoggedIn: userSelectors.isNotLoggedIn(state.user)
  };
};

export default connect(mapStateToProps)(Layout);
