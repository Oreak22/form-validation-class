import { useEffect, useState } from "react";
import "./App.css";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";

function App() {
  let userSchema = yup.object({
    firstName: yup
      .string("this should be a text")
      .required("field is required")
      .min(3, "a minimum of 3 letters is required"),
    lastName: yup
      .string("this should be a text")
      .required("field is required")
      .min(3, "a minimum of 3 letters is required"),
    email: yup.string().required("").email("invalid email"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
        "password not strong enough",
      ),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" className="form-control" />
            {touched.firstName && errors.firstName && (
              <span className="text-danger">{errors.firstName}</span>
            )}
            <br />
            <Field name="lastName" className="form-control" />
            {touched.lastName && errors.lastName && (
              <span>{errors.lastName}</span>
            )}
            <br />
            <Field name="email" type="email" className="form-control" />{" "}
            {touched.email && errors.email && <span>{errors.email}</span>}
            <br />
            <Field name="password" className="form-control" />
            {touched.password && errors.password && (
              <span>{errors.password}</span>
            )}{" "}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
