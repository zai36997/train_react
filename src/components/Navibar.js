import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {NavLink }from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab,fas)


export default class Navibar extends Component {
    render() {
        return (
            <>
       <Navbar bg="dark" variant="dark" >
       
  <Navbar.Brand href="#home"><FontAwesomeIcon icon={['fas', 'utensils']} />  React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className= "nav-link" exact= {true} to= "/" >Home</NavLink>
      <NavLink className= "nav-link" to= "/about">About</NavLink>
      <NavLink className= "nav-link" to= "/shop">Shop</NavLink>
      <NavLink className= "nav-link" >Link</NavLink>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </>
        )
    }
}
