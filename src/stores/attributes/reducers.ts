import {
    ADD_NEW_ATTRIBUTE, DELETE_ATTRIBUTE, UPDATE_ATTRIBUTE
} from './actions';

const initialState: AttributeState = {
    byIds: {},
    allIds: []
};


const fields = (
    state = initialState,
    action: AttributeActionTypes_U,
): AttributeState => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_NEW_ATTRIBUTE:
            newState.byIds = { ...state.byIds, [action.attribute.id]: { ...action.attribute } };
            newState.allIds = [...state.allIds, action.attribute.id];
            return newState;
        case DELETE_ATTRIBUTE:
            delete newState.byIds[action.id];
            newState.allIds = newState.allIds.filter(s => s !== action.id);
            return newState;
        case UPDATE_ATTRIBUTE:
            newState.byIds[action.attribute.id] = action.attribute;
            return newState;
        default:
            return state;
    }
};

export default fields;
