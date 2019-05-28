import React, { useEffect } from "react";
import { LayoutWrapper } from "./Layout.styles";
import NavBar from "../NavBar/index";
import CreateAccountForm from "../../../user/components/CreateAccountForm";
import { connect } from "react-redux";
import { userActions, userSelectors } from "../../../user/ducks";
import MyTypes from "MyTypes";
import { bindActionCreators, Dispatch } from "redux";

const mapStateToProps = (state: MyTypes.RootState) => ({
  user: userSelectors.getUser(state.user)
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
  bindActionCreators({ logUserIn: userActions.logUserIn }, dispatch);

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type ConnectedProps = ReturnType<typeof mapStateToProps>

type ownProps = {} & ConnectedProps & DispatchProps;

const Layout: React.FC<ownProps> = ({ user, logUserIn }) => {
  useEffect(() => {
    logUserIn();
  }, [logUserIn]);

  console.log("current User: ", user);

  return (
    <LayoutWrapper>
      <NavBar />
      <CreateAccountForm />
    </LayoutWrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
