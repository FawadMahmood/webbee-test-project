import {
    ADD_CATEGORY, ADD_FIELD_RELATION, ADD_ITEM_RELATION, DELETE_CATEGORY, REMOVE_FIELD_RELATION, REMOVE_ITEM_RELATION, UPDATE_CATEGORY
} from './actions';

const initialState: CategoryState = {
    byIds: {},
    allIds: []
}




const categories = (
    state = initialState,
    action: CategoriesActionTypes_U,
): CategoryState => {
    let newState = { ...state };

    switch (action.type) {
        case ADD_CATEGORY:
            newState.byIds = { ...state.byIds, [action.category.id]: { ...action.category, fieldIds: [], itemIds: [] } };
            newState.allIds = [...state.allIds, action.category.id];
            return newState;
        case DELETE_CATEGORY:
            delete newState.byIds[action.id];
            newState.allIds = newState.allIds.filter((s) => s !== action.id);
            return newState;
        case ADD_FIELD_RELATION:
            newState.byIds[action.relation.id].fieldIds = [...newState.byIds[action.relation.id].fieldIds, action.relation.item_id]
            return newState;
        case ADD_ITEM_RELATION:
            newState.byIds[action.relation.id].itemIds = [...newState.byIds[action.relation.id].itemIds, action.relation.item_id]
            return newState;
        case REMOVE_ITEM_RELATION:
            newState.byIds[action.relation.id].itemIds = newState.byIds[action.relation.id].itemIds.filter(s => s !== action.relation.item_id);
            return newState;
        case REMOVE_FIELD_RELATION:
            newState.byIds[action.relation.id].fieldIds = newState.byIds[action.relation.id].fieldIds.filter(s => s !== action.relation.item_id);
            return newState;
        case UPDATE_CATEGORY:
            newState.byIds[action.category.id] = action.category;
            return newState;
        default:
            return state;
    }
};

export default categories;
