import React from "react";
import { ListGroup, ListGroupItem, Badge, Button, Container } from "reactstrap";
// import { connect } from "react-redux";
import { removeItem, decreaseAmount } from "../actions/cartAction";

import { useCart } from "../context/CartContext";

// function Cart(props) {
//     return (
//         <Container>
//             <ListGroup className="mt-3">
//                 {props.cart &&
//                     props.cart.map(product => (
//                         <ListGroupItem key={product.id}>
//                             {product.title}
//                             <Badge> {product.amount}</Badge>
//                             <Button
//                                 close
//                                 onClick={() => props.removeItem(product)}
//                             />
//                             <Button
//                                 close
//                                 aria-label="Decrease"
//                                 className="mr-2"
//                                 onClick={() => props.decreaseAmount(product)}
//                             >
//                                 <span aria-hidden>&ndash;</span>
//                             </Button>
//                         </ListGroupItem>
//                     ))}
//             </ListGroup>
//         </Container>
//     );
// }

// const mapStateToProps = (state, ownsProps) => {
//     return {
//         cart: state.cart
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         removeItem: product => dispatch(removeItem(product)),
//         decreaseAmount: product => dispatch(decreaseAmount(product))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

export default function() {
    const { cart, cartDispatch } = useCart();
    return (
        <Container>
            <ListGroup className="mt-3">
                {cart &&
                    cart.map(product => (
                        <ListGroupItem key={product.id}>
                            {product.title}
                            <Badge> {product.amount}</Badge>
                            <Button
                                close
                                onClick={() =>
                                    cartDispatch(removeItem(product))
                                }
                            />
                            <Button
                                close
                                aria-label="Decrease"
                                className="mr-2"
                                onClick={() =>
                                    cartDispatch(decreaseAmount(product))
                                }
                            >
                                <span aria-hidden>&ndash;</span>
                            </Button>
                        </ListGroupItem>
                    ))}
            </ListGroup>
        </Container>
    );
}
