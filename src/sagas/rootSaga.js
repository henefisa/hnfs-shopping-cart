import { call, put, takeLatest, all } from "redux-saga/effects";

import {
    GET_PRODUCTS,
    getProductsSuccess,
    getProductsFailed
} from "../actions/getProductsAction";

async function fetchProducts() {
    const result = await (await fetch("http://localhost:3001/products")).json();
    return result;
}

export function* watcherGetProducts() {
    yield takeLatest(GET_PRODUCTS, workerGetProducts);
}

export function* workerGetProducts() {
    try {
        const response = yield call(fetchProducts);
        yield put(getProductsSuccess(response));
    } catch (e) {
        yield put(getProductsFailed(e.message));
    }
}

export default function* rootSaga() {
    yield all([watcherGetProducts()]);
}
