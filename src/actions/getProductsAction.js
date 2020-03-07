const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";

function getProducts() {
    return {
        type: GET_PRODUCTS
    };
}

function getProductsSuccess(data) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data
    };
}

function getProductsFailed(message) {
    return {
        type: GET_PRODUCTS_FAILED,
        message
    };
}

export {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    getProducts,
    getProductsFailed,
    getProductsSuccess
};
