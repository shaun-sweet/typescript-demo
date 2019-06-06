import React from "react";
import MyTypes from "MyTypes";
import {
  ExampleDisplayUserDetailsWrapper,
  ExampleUserDetail
} from "./ExampleDisplayUserDetails.styles";
import { userSelectors, userActions } from "../../ducks";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: MyTypes.RootState) => ({
  user: userSelectors.getUser(state.user)
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
  bindActionCreators({ logUserIn: userActions.logUserIn }, dispatch);

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type ConnectedProps = ReturnType<typeof mapStateToProps>;

type OwnProps = {} & ConnectedProps & DispatchProps;

const ExampleDisplayUserDetails: React.FC<OwnProps> = props => (
  <ExampleDisplayUserDetailsWrapper>
    <ExampleUserDetail>Username: {props.user.username}</ExampleUserDetail>
    <ExampleUserDetail>UserId: {props.user.userId}</ExampleUserDetail>
    <ExampleUserDetail>Permissions: {props.user.permissions}</ExampleUserDetail>
    <ExampleUserDetail>is an Admin: {props.user.isAdmin}</ExampleUserDetail>
  </ExampleDisplayUserDetailsWrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleDisplayUserDetails);
