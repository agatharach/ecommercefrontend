import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import cart from "../Aset/shopping-cart-of-checkered-design.png";

function NavBar() {
    return (
        <div className="header">
            <Navbar className="shadow py-1" expand="md" fixed="top">
                <Navbar.Brand href="/">
                    <span className="align-self-center">{"BERAS-B"}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end pt-0"
                >
                    <Nav>
                        <Nav.Link href="/login">Log In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/items">Shop</Nav.Link>
                        <Nav.Link href="/">
                            <img
                                alt=""
                                src={cart}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
