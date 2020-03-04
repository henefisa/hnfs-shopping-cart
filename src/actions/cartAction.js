const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

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

export { ADD_ITEM, REMOVE_ITEM, addItem, removeItem };
