import {
    ADD_PROPERTY,
    SET_PROPERTIES
} from "../actions/types";
const initialState = {
    properties: {}
};
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_PROPERTIES:
        return {
            ...state,
            properties: action.payload
        };
        case ADD_PROPERTY:
        return {
            ...state,
            properties: state.properties + action.payload
        };
        default:
        return state;
    }
}