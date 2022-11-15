import {
    ADD_ITEM, ADD_ITEM_ATTRIBUTE_RELATION, DELETE_ITEM, REMOVE_ITEM_ATTRIBUTE_RELATION, UPDATE_ITEM
} from './actions';

const initialState: ItemState = {
    byIds: {},
    allIds: []
};




const fields = (
    state = initialState,
    action: ItemActionTypes_U,
): ItemState => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ITEM:
            newState.byIds = { ...state.byIds, [action.item.id]: { ...action.item } };
            newState.allIds = [...state.allIds, action.item.id];
            return newState;
        case ADD_ITEM_ATTRIBUTE_RELATION:
            newState.byIds[action.relation.id].attributeIds = [...newState.byIds[action.relation.id].attributeIds, action.relation.attrubute_id]
            return newState;
        case REMOVE_ITEM_ATTRIBUTE_RELATION:
            console.log("UPPER WALA LOG", newState.byIds[action.relation.id],);
            console.log(REMOVE_ITEM_ATTRIBUTE_RELATION, newState.byIds[action.relation.id]);
            newState.byIds[action.relation.id].attributeIds = newState.byIds[action.relation.id].attributeIds.filter(s => s !== action.relation.attrubute_id)
            return newState;
        case UPDATE_ITEM:
            newState.byIds[action.item.id] = action.item;
            return newState;
        case DELETE_ITEM:
            delete newState.byIds[action.id]
            newState.allIds = newState.allIds.filter(s => s !== action.id);
            return newState;
        default:
            return state;
    }
};

export default fields;
