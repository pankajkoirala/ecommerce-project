import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhoneAlt, faShoppingCart, faListAlt} from "@fortawesome/free-solid-svg-icons";
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
        <Link className="mx-4 font-weight-bold text-white" to="/"><FontAwesomeIcon className="mx-1" icon={faHome}/>
          Home
        </Link>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  className="mx-4 font-weight-bold text-white"
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
                <Link className="text-white " to="/inputitem">
                  Input items
                </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="mt-2 mx-4 font-weight-bold ">
                <Link className="text-white" to="/cartitems"><FontAwesomeIcon className="mx-1" icon={faShoppingCart}/>
                  cart
                </Link>
              </div>
            </NavItem>
            <div className="mt-2 mx-4 font-weight-bold text-secondary">
              <Link className="text-white" to="/contactus"><FontAwesomeIcon className="mx-1" icon={faPhoneAlt}/>
                Contact us
              </Link>
            </div>
          </Nav>
          <NavItem className="d-flex justify-content-start m-2">
          <div className="mx-2 font-weight-bold  ">
              <Link className="text-white" to="/inputitem"> Input items</Link>
            </div>
          <div className="mx-2 font-weight-bold  ">
              <Link className="text-white" to="/orderlist"><FontAwesomeIcon className="mx-1" icon={ faListAlt}/>orderList </Link>
            </div>
            <div className="mx-2 font-weight-bold  ">
              <Link className="text-white" to="/contactus">sign up</Link>
            </div>
            <div className="mx-2 font-weight-bold  ">
              <Link className="text-white" to="/login">login</Link>
            </div>
          </NavItem>
        </Collapse>
      </Navbar>

    </div>


  );
};

export default Example;
