const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const DECREASE_AMOUNT = "DECREASE_AMOUNT";
const addItem = item => {
    return {
        type: ADD_ITEM,
        item
    };
};

const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    };
};

const decreaseAmount = item => {
    return {
        type: DECREASE_AMOUNT,
        item
    };
};

export {
    ADD_ITEM,
    REMOVE_ITEM,
    addItem,
    removeItem,
    DECREASE_AMOUNT,
    decreaseAmount
};
