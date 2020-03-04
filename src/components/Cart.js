import React from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartAction";

function Cart(props) {
    return (
        <ListGroup>
            {props.cart &&
                props.cart.map(product => (
                    <ListGroupItem key={product.id}>
                        {product.title}
                        <Badge> {product.amount}</Badge>
                        <Button
                            close
                            onClick={() => props.removeItem(product)}
                        />
                    </ListGroupItem>
                ))}
        </ListGroup>
    );
}

const mapStateToProps = (state, ownsProps) => {
    return {
        cart: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: product => dispatch(removeItem(product.id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
