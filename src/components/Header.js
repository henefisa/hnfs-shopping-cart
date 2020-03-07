import React, { useState } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Container
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header({ cart }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand to="/" exact tag={RRNavLink}>
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/cart" exact tag={RRNavLink}>
                                    Your cart <Badge>{cart.length}</Badge>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps)(Header);
