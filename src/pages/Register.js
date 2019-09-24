import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is required "),
  email: Yup.string()
    .email("Invalid email")
    .required("email is required"),
  rold: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("rold is required")
});

export default class Resgister extends Component {
  register = async values => {
    try {
      //    console.log(values)
      const apiUrl = "https://zzaaii.herokuapp.com/api/user/register";
      const response = await axios.post(apiUrl, values);
      //   console.log(response.data);
      if (response.status === 201) {
        Swal.fire("ลงทะเบียนสำเร็จ", "", "success");
        //alert("ลงทะเบียนสำเร็จ");
      }
    } catch (error) {
      Swal.fire("Oops...", error, "error");
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1>ลงทะเบียน</h1>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  rold: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  // same shape as initial values
                  this.register(values);
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <label>name</label>
                      <Field
                        name="name"
                        className={`form-control ${
                          touched.name
                            ? errors.name
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        } `}
                        placeholder="Fullname"
                      />
                      <ErrorMessage
                        name="name"
                        className="invalid-feedback"
                        componnent="div"
                      />
                      {/* {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null} */}
                    </div>

                    <div className="form-group">
                      <label>email</label>
                      <Field
                        name="email"
                        className={`form-control ${
                          touched.email
                            ? errors.email
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        } `}
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        className="invalid-feedback"
                        componnent="div"
                      />
                      {/* {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null} */}
                    </div>
                    <div className="form-group">
                      <label>password</label>
                      <Field
                        name="password"
                        type="password"
                        className={`form-control ${
                          touched.password
                            ? errors.password
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        } `}
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        className="invalid-feedback"
                        componnent="div"
                      />
                      {/* {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                      ) : null} */}
                    </div>

                    <div className="form-group">
                      <label>role</label>
                      <Field
                        name="rold"
                        className={`form-control ${
                          touched.rold
                            ? errors.rold
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        } `}
                        placeholder="Fullname"
                      />
                      <ErrorMessage
                        name="rold"
                        className="invalid-feedback"
                        componnent="div"
                      />
                      {/* {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null} */}
                    </div>
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
}
