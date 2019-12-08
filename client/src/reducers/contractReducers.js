import {
    ADD_CONTRACT,
    SET_CONTRACTS
} from "../actions/types";
const initialState = {
    contracts: {}
};
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CONTRACTS:
        return {
            ...state,
            contracts: action.payload
        };
        case ADD_CONTRACT:
        return {
            ...state,
            contracts: state.contracts + action.payload
        };
        default:
        return state;
    }
}