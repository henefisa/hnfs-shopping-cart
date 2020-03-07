import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import cartReducer from "../reducers/cartReducer";
import getProductsReducer from "../reducers/getProductsReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        cart: cartReducer,
        products: getProductsReducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
