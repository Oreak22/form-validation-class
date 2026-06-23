import { useEffect, useState } from "react";
import "./App.css";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increaceByuserWish,
  increment,
} from "./redux/counterFactory";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(0);
  console.log(count);
  let userSchema = yup.object({
    firstName: yup
      .string("this should be a text")
      .required("field is required")
      .min(3, "a minimum of 3 letters is required")
      .max(25, "field can not handle more that 25 letters"),
    lastName: yup
      .string("this should be a text")
      .required("field is required")
      .min(3, "a minimum of 3 letters is required"),
    email: yup.string().required("").email("invalid email"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
        "password not strong enough",
      ),
  });

  return (
    <>
      <p>
        Our current state = <span className="text-danger">{count}</span>
        <div>
          <button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            increace
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement())}
          >
            decreace
          </button>
          <input type="number" onChange={(e) => setUserInput(e.target.value)} />
          <button
            className="btn btn-warning"
            onClick={() => dispatch(increaceByuserWish(Number(userInput)))}
          >
            increace by user's will
          </button>
        </div>
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div
              className="card shadow border-0"
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Create Account</h2>
                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <Field name="firstName" className="form-control" />
                      {touched.firstName && errors.firstName && (
                        <span className="text-danger">{errors.firstName}</span>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <Field name="lastName" className="form-control" />
                      {touched.lastName && errors.lastName && (
                        <span className=" text-danger">{errors.lastName}</span>
                      )}
                    </div>
                  </div>
                  <Field name="email" type="email" className="form-control" />
                  {touched.email && errors.email && (
                    <span className=" text-danger">{errors.email}</span>
                  )}
                  <Field name="password" className="form-control" />
                  {touched.password && errors.password && (
                    <span className=" text-danger">{errors.password}</span>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div class="loader"></div>
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </Form>

                <p className="text-center mt-3 mb-0">
                  Already have an account?{" "}
                  <a href="/login" className="text-decoration-none">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;
