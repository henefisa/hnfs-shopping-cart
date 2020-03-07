import { ADD_ITEM, REMOVE_ITEM, DECREASE_AMOUNT } from "../actions/cartAction";

const initialState = [];

function cartReducer(state = initialState, action) {
    const handleAddItem = () => {
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

    const handleDeleteItem = () => {
        return state.filter(item => item.id !== action.item.id);
    };

    const handleDecreaseAmount = () => {
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
                return handleDeleteItem();
            }
        }
    };

    switch (action.type) {
        case ADD_ITEM:
            return handleAddItem();
        case REMOVE_ITEM:
            return handleDeleteItem();
        case DECREASE_AMOUNT:
            return handleDecreaseAmount();
        default:
            return state;
    }
}

export default cartReducer;
