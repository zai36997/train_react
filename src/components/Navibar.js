import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { connect } from "react-redux";

library.add(fab, fas);
class Navibar extends Component {
  render() {
    return (
      <>
        <Navbar
          class="navbar navbar-light"
          expand="lg"
          style={{ backgroundColor: "#7AC8F0" }}
        >
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={["fas", "utensils"]} /> React-Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" exact={true} to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                ตะกร้าสินค้า
                <span class="badge badge-light">{this.props.total}</span>
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </Nav>
            <Login />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
const mapStatetoProps = state => {
  return {
    total: state.cartReducer.total
  };
};

export default connect(mapStatetoProps)(Navibar);
