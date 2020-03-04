import React from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeItem, decreaseAmount } from "../actions/cartAction";

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
                        <Button
                            close
                            aria-label="Decrease"
                            className="mr-2"
                            onClick={() => props.decreaseAmount(product)}
                        >
                            <span aria-hidden>&ndash;</span>
                        </Button>
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
        removeItem: product => dispatch(removeItem(product.id)),
        decreaseAmount: product => dispatch(decreaseAmount(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
