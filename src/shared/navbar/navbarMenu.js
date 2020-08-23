import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./navmenu.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  className="navmenu" light expand="lg">
        <Link className="mx-4 font-weight-bold text-dark" to="/">
          Home
        </Link>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  className="mx-4 font-weight-bold text-dark"
                  nav
                  caret
                >
                  Category
                </DropdownToggle>
                <DropdownMenu left="true">
                  <DropdownItem>
                    <div className="categoryBotton">
                      <Link className="text-secondary" to="/electronic">
                        electronic
                      </Link>
                      <br />
                    </div>
                    <div className="categoryBotton">
                      <Link className="text-secondary" to="/household">
                        household
                      </Link>
                      <br />
                    </div>
                    <div className="categoryBotton">
                      <Link className="text-secondary" to="/sports">
                        sports
                      </Link>
                      <br />
                    </div>
                    <div className="categoryBotton">
                      <Link className="text-secondary" to="/fashion">
                        fashion
                      </Link>
                      <br />
                    </div>
                    <div className="categoryBotton">
                      <Link className="text-secondary" to="/health-and-care">
                        health & care
                      </Link>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <div className="mt-2 mx-4 font-weight-bold ">
                <Link className="text-dark " to="/inputitem">
                  Input items
                </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="mt-2 mx-4 font-weight-bold ">
                <Link className="text-dark" to="/cartitems">
                  cart
                </Link>
              </div>
            </NavItem>
            <div className="mt-2 mx-4 font-weight-bold text-secondary">
              <Link className="text-dark" to="/contactus">
                Contact us
              </Link>
            </div>
          </Nav>
          <NavItem className="d-flex justify-content-start m-2">
          <div className="mx-2 font-weight-bold  text-dark">
              <Link to="/inputitem"> Input items</Link>
            </div>
          <div className="mx-2 font-weight-bold  text-dark">
              <Link to="/orderlist">orderList</Link>
            </div>
            <div className="mx-2 font-weight-bold  text-dark">
              <Link to="/contactus">sign up</Link>
            </div>
            <div className="mx-2 font-weight-bold  text-dark">
              <Link to="/login">login</Link>
            </div>
          </NavItem>
        </Collapse>
      </Navbar>

    </div>


  );
};

export default Example;
