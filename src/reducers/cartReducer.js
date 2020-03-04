import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartAction";

const initialState = [];
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const index = state.findIndex(
                product => product.id === action.item.id
            );
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
        }
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default cartReducer;
