import React, { Component } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    const LOGIN_INITIAL_VALUES = { email: "", password: "" };
    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid Format").required("Email Required"),
      password: Yup.string().required("Password Required"),
    });
    const onSubmit = (values) => {
      console.log("Form Data", values);
    };

    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <Formik
                initialValues={LOGIN_INITIAL_VALUES}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form>
                  <div>
                    <h4>Welcome to Farfar onlineshop</h4>
                    <p>Insert your information please!</p>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Fake Email"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(errorMsg) => (
                          <div className="text-danger">{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password PlaceHolder"
                        className="form-control"
                      />
                      <ErrorMessage name="password">
                        {(errorMsg) => (
                          <div className="text-danger">{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="d-grid gap-2 my-3">
                      <button type="submit" className="btn btn-success">
                        Enter
                      </button>
                      <button type="submit" className="btn btn-outline-success">
                        Enter With Google
                      </button>
                      <div>
                        <span>Don't you have an account?</span>
                        <Link to={"/register/"}>Register here</Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
