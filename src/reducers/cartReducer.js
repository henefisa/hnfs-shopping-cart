import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartAction";

const initialState = [];
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.concat(action.item);
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default cartReducer;