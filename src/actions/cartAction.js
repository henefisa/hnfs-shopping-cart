const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const addItem = item => {
    return {
        type: ADD_ITEM,
        item
    };
};

const removeItem = index => {
    return {
        type: REMOVE_ITEM,
        index
    };
};

export { ADD_ITEM, REMOVE_ITEM, addItem, removeItem };
