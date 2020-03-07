import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS
} from "../actions/getProductsAction";

const initialState = {
    data: [],
    loading: false,
    message: ""
};

function getProductsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                loading: true
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                message: ""
            };
        }
        case GET_PRODUCTS_FAILED: {
            return {
                ...state,
                message: action.message,
                loading: false
            };
        }
        default:
            return state;
    }
}

export default getProductsReducer;
