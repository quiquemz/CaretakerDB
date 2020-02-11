import {
    ADD_PROPERTY,
    SET_PROPERTIES,
    DELETE_PROPERTY,
    UPDATE_PROPERTY
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
            properties: state.properties.concat(action.payload)
        };
        case DELETE_PROPERTY:
        return {
            ...state,
            properties: state.properties.filter(prop => prop._id !== action.payload)
        };
        case UPDATE_PROPERTY:
            console.log("UPDATING!");
        return {
            ...state,
            properties: state.properties.filter(prop => prop._id !== action.payload)
        };
        default:
        return state;
    }
}