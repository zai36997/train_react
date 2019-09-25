import React, { Component } from "react";

import { Formik, Form, Field } from "formik";
import axios from "axios";

export default class Login extends Component {
  // https://zzaaii.herokuapp.com/api/user/login
  state = {
    profile: null,
    isLogin: false
  };

  login = async values => {
    try {
      let apiUrl = "https://shop-tangmo.herokuapp.com/api/users/login";
      let response = await axios.post(apiUrl, values);

      localStorage.setItem("token", JSON.stringify(response.data));

      const token = JSON.parse(localStorage.getItem("token"));
      apiUrl = "https://shop-tangmo.herokuapp.com/api/users/me";
      response = await axios.get(apiUrl, {
        headers: {
          Authorization: "Bearer " + token.accress_token
        }
      });

      localStorage.setItem("profile", JSON.stringify(response.data.user));
      this.setState({
        profile: response.data.user,
        isLogin: true
      });
    } catch (error) {
      this.setState({
        isLogin: false
      });
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    //set state ให้เป็นค่า default
    this.setState({
      isLogin: false,
      profile: null
    });
  };

  componentDidMount() {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      this.setState({
        profile: profile,
        isLogin: true
      });
    } else {
      this.logout();
    }
  }

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <span>
            ยินดีต้อนรับ คุณ {this.state.profile.name}
            <button className="btn btn-primary" onClick={this.logout}>
              Logout
            </button>
          </span>
        ) : (
          <Formik
            onSubmit={(values, { setSubmitting }) => {
              this.login(values);

              setSubmitting(false);
            }}
            initialValues={{
              email: "",
              password: ""
            }}
          >
            {({ handleSubmit, handleChange, isSubmitting }) => (
              <Form className="form-inline">
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="username"
                    className="form-control mr-sm-2"
                  />
                </div>

                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    className="form-control mr-sm-2"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning my-2 my-sm-0"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        )}
      </>
    );
  }
}
