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
import { useCart } from "../context/CartContext";
// import { connect } from "react-redux";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { cart } = useCart();

    return (
        <header>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand to="/" exact tag={RRNavLink}>
                        HNFS
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

export default Header;

// const mapStateToProps = (state, ownProps) => {
//     return {
//         cart: state.cart
//     };
// };

// export default connect(mapStateToProps)(Header);
