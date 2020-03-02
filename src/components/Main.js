import React, { useState } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Container
} from "reactstrap";
import { connect } from "react-redux";

import "../styles/main.css";

import { addItem } from "../actions/cartAction.js";

const data = [
    {
        id: 1,
        src: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        title: "Soldiers of Fortune",
        text: "Propithecus verreauxi"
    },
    {
        id: 2,
        src: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        title: "Hollywood and The Pentagon: A Dangerous Liaison",
        text: "Chlidonias leucopterus"
    },
    {
        id: 3,
        src: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        title: "Horrible Way to Die, A ",
        text: "Anas punctata"
    },
    {
        id: 4,
        src: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        title: "Kill the Irishman",
        text: "Raphicerus campestris"
    },
    {
        id: 5,
        src: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        title: "Race for Your Life, Charlie Brown",
        text: "Papio cynocephalus"
    },
    {
        id: 6,
        src: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        title:
            "Black Magic Rites & the Secret Orgies of the 14th Century (Riti, magie nere e segrete orge nel trecento...)",
        text: "Oxybelis fulgidus"
    },
    {
        id: 7,
        src: "http://dummyimage.com/300x200.png/dddddd/000000",
        title: "Attack the Block",
        text: "Loxodonta africana"
    },
    {
        id: 8,
        src: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        title: "Man with Bogart's Face, The",
        text: "Potos flavus"
    },
    {
        id: 9,
        src: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        title: "Tree, The",
        text: "Spilogale gracilis"
    },
    {
        id: 10,
        src: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        title: "Small Change (Argent de poche, L')",
        text: "Macropus fuliginosus"
    }
];

function Main(props) {
    const [products, setProducts] = useState(data);

    return (
        <div className="main">
            <Container className="main-container">
                {products.map(product => {
                    return (
                        <Card key={product.id}>
                            <CardImg top width="100%" src={product.src} />
                            <CardBody>
                                <CardTitle>{product.title}</CardTitle>
                                <CardText>{product.text}</CardText>
                                <Button
                                    onClick={() => props.addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </CardBody>
                        </Card>
                    );
                })}
            </Container>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: product => dispatch(addItem(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
