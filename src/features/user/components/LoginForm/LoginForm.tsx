import React from "react";
import { StyledForm } from "./LoginForm.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { userActions } from "../../ducks";

const mapDispatchToProps = {
  logUserIn: userActions.setUserLoggedIn
};

type ownProps = { } & typeof mapDispatchToProps;

const LoginForm: React.FC<ownProps> = ({ logUserIn }) => (
  <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    // maybe delete  the outter lambda to show how it spreads args
    onSubmit={() =>
      logUserIn({
        isAdmin: true,
        isLoggedIn: true,
        userId: "fsfwe3f4",
        permissions: {}
      })
    }
  >
    {({ handleChange, handleSubmit, values }) => {
      return (
        <StyledForm onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={values.email}
            name="email"
            type="email"
          />
          <input
            onChange={handleChange}
            value={values.password}
            name="password"
            type="password"
          />
          <button type="submit"> Log In </button>
        </StyledForm>
      );
    }}
  </Formik>
);

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
