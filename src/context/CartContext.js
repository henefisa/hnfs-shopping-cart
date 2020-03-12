import { createContext, useContext } from "react";

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext);
};

export { CartContext as default, useCart };
