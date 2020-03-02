import React, { useState } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Badge,
    Button
} from "reactstrap";
import { connect } from "react-redux";

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="primary" outline>
                            Your cart{" "}
                            <Badge color="secondary">{props.cart.length}</Badge>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state
    }
}

export default connect(mapStateToProps)(Header);