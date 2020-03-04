import { ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT } from "../actions/cartAction";

const initialState = [];
const handleAddItem = (state, action) => {
    const index = state.findIndex(product => product.id === action.item.id);
    if (index !== -1) {
        return [
            ...state.slice(0, index),
            {
                ...action.item,
                amount: state[index].amount + 1
            },
            ...state.slice(index + 1)
        ];
    }
    return state.concat([{ ...action.item, amount: 1 }]);
};

const handleDeleteItem = (state, action) => {
    return state.filter(item => item.id !== action.id);
};

const handleDecreaseAmount = (state, action) => {
    const index = state.findIndex(product => product.id === action.item.id);
    if (index !== -1) {
        if (state[index].amount > 1) {
            return [
                ...state.slice(0, index),
                {
                    ...action.item,
                    amount: state[index].amount - 1
                },
                ...state.slice(index + 1)
            ];
        } else {
            return handleDeleteItem(state, action.item);
        }
    }
};
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return handleAddItem(state, action);
        case REMOVE_ITEM:
            return handleDeleteItem(state, action);
        case DECREASE_AMOUNT:
            return handleDecreaseAmount(state, action);
        default:
            return state;
    }
}

export default cartReducer;
