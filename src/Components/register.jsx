import React, { Component } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    const LOGIN_INITIAL_VALUES = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    const validationSchema = Yup.object({
      first_name: Yup.string().required("First Name Required"),
      last_name: Yup.string().required("Last Name Required"),
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
            <div className="col-6 mb-5 p-5 pb-2 border border-2 border-opacity-50 border-secondary rounded">
              <Formik
                initialValues={LOGIN_INITIAL_VALUES}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form>
                  <h4>Welcome to Farfar onlineshop</h4>
                  <p>Insert your information please!</p>
                  <div className="my-2">
                    <label htmlFor="first_name" className="form-label">
                      First Name
                    </label>
                    <Field
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="type your first name here"
                      className="form-control"
                    />
                    <ErrorMessage name="first_name">
                      {(errorMsg) => (
                        <div className="text-danger">{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="my-2">
                    <label htmlFor="last_name" className="form-label">
                      Last Name
                    </label>
                    <Field
                      id="last_name"
                      name="last_name"
                      type="last_name"
                      placeholder="type your last name here"
                      className="form-control"
                    />
                    <ErrorMessage name="last_name">
                      {(errorMsg) => (
                        <div className="text-danger">{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="my-2">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
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
                      placeholder="Password"
                      className="form-control"
                    />
                    <ErrorMessage name="password">
                      {(errorMsg) => (
                        <div className="text-danger">{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="d-grid gap-2 my-5">
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
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
