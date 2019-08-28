import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import cart from "../Aset/shopping-cart-of-checkered-design.png";

class NavBarPost extends React.Component {
    handleSignOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("status", false);
        localStorage.setItem("user_id", "");
    };

    render() {
        return (
            <div className="header">
                <Navbar className="shadow py-1" expand="md" fixed="top">
                    <Navbar.Brand href="/">
                        <span className="align-self-center">{"BERAS-A"}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end pt-0"
                    >
                        <Nav>
                            <Nav.Link href="/items">Shop</Nav.Link>
                            <Nav.Link href="/" onClick={this.handleSignOut}>
                                Log Out
                            </Nav.Link>
                            <Nav.Link
                                href={
                                    "/carts/" + localStorage.getItem("user_id")
                                }
                            >
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
}

export default NavBarPost;
