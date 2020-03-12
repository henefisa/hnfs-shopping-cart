import React, { useReducer } from "react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./route/Routes";
// import cartStore from "./store/cartStore";

import cartReducer from "./reducers/cartReducer";
import getProductsReducer from "./reducers/getProductsReducer";

import CartContext from "./context/CartContext";

const initialCart = [];
const initialProducts = {
    data: [],
    loading: false,
    message: ""
};

export default function() {
    const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
    const [products, productsDispatch] = useReducer(
        getProductsReducer,
        initialProducts
    );

    return (
        // <BrowserRouter>
        //     <Provider store={cartStore}>
        //         <div className="App">
        //             <Header />
        //             <Routes />
        //         </div>
        //     </Provider>
        // </BrowserRouter>
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart,
                    cartDispatch,
                    products,
                    productsDispatch
                }}
            >
                <div className="App">
                    <Header />
                    <Routes />
                </div>
            </CartContext.Provider>
        </BrowserRouter>
    );
}
