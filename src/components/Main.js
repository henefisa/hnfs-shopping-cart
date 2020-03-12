import React, { useEffect, useState } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Container,
    Spinner,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
// import { connect } from "react-redux";

import "../styles/main.css";

import { addItem } from "../actions/cartAction.js";
// import { getProducts } from "../actions/getProductsAction";

import { useCart } from "../context/CartContext";

import {
    getProducts,
    getProductsFailed,
    getProductsSuccess
} from "../actions/getProductsAction";

function Main() {
    const [currentPage, setCurrentPage] = useState(0);
    const { cartDispatch, products, productsDispatch } = useCart();
    
    // useEffect(() => {
    //     getProducts();
    // }, [getProducts]);

    useEffect(() => {
        productsDispatch(getProducts());
        const fetchData = async () => {
            try {
                const result = await (
                    await fetch("http://localhost:3001/products")
                ).json();
                productsDispatch(getProductsSuccess(result));
            } catch (e) {
                productsDispatch(getProductsFailed(e.message));
            }
        };
        fetchData();
    }, [productsDispatch]);

    const pageSize = 40;
    const pageCount = products.data.length / pageSize;

    if (products.loading) {
        return (
            <div className="loading">
                <Spinner color="primary" />
            </div>
        );
    }

    const handleChangePage = (event, index) => {
        event.preventDefault();
        setCurrentPage(index);
    };

    return (
        <div className="main">
            <Container className="main-container">
                <div className="pagination-wrapper">
                    <Pagination>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                previous
                                href="#"
                                onClick={event =>
                                    handleChangePage(event, currentPage - 1)
                                }
                            />
                        </PaginationItem>
                        {[...Array(pageCount)].map((page, index) => {
                            return (
                                <PaginationItem
                                    active={index === currentPage}
                                    key={index}
                                >
                                    <PaginationLink
                                        href="#"
                                        onClick={event =>
                                            handleChangePage(event, index)
                                        }
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}
                        <PaginationItem disabled={currentPage >= pageCount - 1}>
                            <PaginationLink
                                next
                                href="#"
                                onClick={event =>
                                    handleChangePage(event, currentPage + 1)
                                }
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
                {products.data
                    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                    .map(product => {
                        return (
                            <Card key={product.id}>
                                <CardImg top width="100%" src={product.src} />
                                <CardBody>
                                    <CardTitle>{product.title}</CardTitle>
                                    <CardText>{product.text}</CardText>
                                    <Button
                                        onClick={() =>
                                            cartDispatch(addItem(product))
                                        }
                                    >
                                        Add to Cart
                                    </Button>
                                </CardBody>
                            </Card>
                        );
                    })}
                <div className="pagination-wrapper">
                    <Pagination>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                previous
                                href="#"
                                onClick={event =>
                                    handleChangePage(event, currentPage - 1)
                                }
                            />
                        </PaginationItem>
                        {[...Array(pageCount)].map((page, index) => {
                            return (
                                <PaginationItem
                                    active={index === currentPage}
                                    key={index}
                                >
                                    <PaginationLink
                                        href="#"
                                        onClick={event =>
                                            handleChangePage(event, index)
                                        }
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}
                        <PaginationItem disabled={currentPage >= pageCount - 1}>
                            <PaginationLink
                                next
                                href="#"
                                onClick={event =>
                                    handleChangePage(event, currentPage + 1)
                                }
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
            </Container>
        </div>
    );
}

export default Main;

// const mapStateToProps = (state, ownProps) => {
//     return {
//         products: state.products
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: product => dispatch(addItem(product)),
//         getProducts: () => dispatch(getProducts())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
