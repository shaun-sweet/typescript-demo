import React from "react";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";
import styled from "styled-components";
import FormInput from "../../../common/components/FormInput";
import { StyledForm } from "./CreateAccountForm.styles";

const Row = styled.div`
  margin-bottom: 1em;
`;

const phoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const passwordRegex = new RegExp(
  /^(?=(?:[^A-Za-z]*[A-Za-z]){1})(?=(?:[^0-9!@#$%^&*()_+-=]*[0-9!@#$%^&*()_+-=]){1}).*$/
);
export const passwordErrorMessage =
  "Password must be at least 8 characters long, contain a letter AND a number OR special character.";

export const phoneNumberRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const phoneNumberErrorMessage = "Must be a valid phone number";

const createAccountFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid Email Address")
    .required("Email Address is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, passwordErrorMessage)
    .matches(passwordRegex, passwordErrorMessage),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(phoneNumberRegex, phoneNumberErrorMessage),
  zip5: Yup.string()
    .required("Zip Code is Required")
    .min(5, "Must be at least 5 numbers")
    .max(5, "Must be no more than 5 numbers")
});

const initialFormState = {
  email: "",
  password: "",
  phoneNumber: "",
  zip5: ""
};

const Container: React.SFC = () => {
  return (
    <Formik
      initialValues={initialFormState}
      onSubmit={values => {
        console.log({ values });
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={createAccountFormValidationSchema}
      render={(formikBag: FormikProps<typeof initialFormState>) => {
        const {
          setFieldValue,
          errors,
          isSubmitting,
          touched,
          values,
          handleBlur,
          handleChange
        } = formikBag;
        const isSubmitDisabled = Boolean(
          errors.email ||
            errors.password ||
            errors.phoneNumber ||
            errors.zip5 ||
            isSubmitting
        );

        console.log(values, formikBag);

        return (
          <StyledForm onSubmit={formikBag.handleSubmit}>
            <Row>
              <FormInput
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                type="email"
                name="email"
                labelText="Enter email"
                touched={touched.email}
                value={values.email}
                error={errors.email}
              />
            </Row>

            <Row>
              <FormInput
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                type="password"
                name="password"
                labelText="Enter Password"
                touched={touched.password}
                value={values.password}
                error={errors.password}
              />
            </Row>

            <Row>
              <FormInput
                onChange={handleChange}
                onBlur={handleBlur}
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                labelText="Enter Phone Number"
                touched={touched.phoneNumber}
                value={values.phoneNumber}
                error={errors.phoneNumber}
                textMask={phoneMask}
              />
            </Row>

            <Row>
              <FormInput
                onChange={event => {
                  const {
                    target: { name: field, value }
                  } = event;
                  const isInputNumber = /^[0-9]+$/.test(value);
                  const shouldSetFieldValue =
                    (isInputNumber && value.length <= 5) || value === "";

                  if (shouldSetFieldValue) setFieldValue(field, value);
                }}
                onBlur={handleBlur}
                id="zip5"
                type="text"
                name="zip5"
                labelText="Enter Zip Code"
                touched={touched.zip5}
                value={values.zip5}
                error={errors.zip5}
              />
            </Row>

            <button type="submit" disabled={isSubmitDisabled}>
              Create My Account
            </button>
          </StyledForm>
        );
      }}
    />
  );
};

// const Container = (props: FormikProps<typeof initialFormState>) => {
//   const {
//     setFieldValue,
//     errors,
//     isSubmitting,
//     touched,
//     initialValues,
//     handleBlur,
//     handleChange
//   } = props;
//   const isSubmitDisabled = Boolean(
//     errors.email ||
//       errors.password ||
//       errors.phoneNumber ||
//       errors.zip5 ||
//       isSubmitting
//   );
//   console.log(
//     props,
//     setFieldValue,
//     errors,
//     isSubmitting,
//     touched,
//     initialValues,
//     handleBlur,
//     handleChange
//   );

//   return (
//     <StyledForm>
//       <Row>
//         <FormInput
//           onChange={handleChange}
//           onBlur={handleBlur}
//           id="email"
//           type="email"
//           name="email"
//           labelText="Enter email"
//           touched={touched.email}
//           value={initialValues.email}
//           error={errors.email}
//         />
//       </Row>

//       <Row>
//         <FormInput
//           onChange={handleChange}
//           onBlur={handleBlur}
//           id="password"
//           type="password"
//           name="password"
//           labelText="Enter Password"
//           touched={touched.password}
//           value={""}
//           error={errors.password}
//         />
//       </Row>

//       <Row>
//         <FormInput
//           onChange={handleChange}
//           onBlur={handleBlur}
//           id="phoneNumber"
//           type="tel"
//           name="phoneNumber"
//           labelText="Enter Phone Number"
//           touched={touched.phoneNumber}
//           value={""}
//           error={errors.phoneNumber}
//           textMask={phoneMask}
//         />
//       </Row>

//       <Row>
//         <FormInput
//           onChange={event => {
//             const {
//               target: { name: field, value }
//             } = event;
//             const isInputNumber = /^[0-9]+$/.test(value);
//             const shouldSetFieldValue =
//               (isInputNumber && value.length <= 5) || value === "";

//             if (shouldSetFieldValue) setFieldValue(field, value);
//           }}
//           onBlur={handleBlur}
//           id="zip5"
//           type="text"
//           name="zip5"
//           labelText="Enter Zip Code"
//           touched={touched.zip5}
//           value={""}
//           error={errors.zip5}
//         />
//       </Row>

//       <button type="submit" disabled={isSubmitDisabled}>
//         Create My Account
//       </button>
//     </StyledForm>
//   );
// };

export default Container;
