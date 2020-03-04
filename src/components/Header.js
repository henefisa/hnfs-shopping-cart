import React, { useState } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/" exact tag={RRNavLink}>reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/cart" exact tag={RRNavLink}>
                                Your cart <Badge>{props.cart.length}</Badge>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state
    };
};

export default connect(mapStateToProps)(Header);
