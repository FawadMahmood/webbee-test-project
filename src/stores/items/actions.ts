export const ADD_ITEM = 'ADD_NEW_ITEM';
export const UPDATE_ITEM = "UPDATE_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const ADD_ITEM_ATTRIBUTE_RELATION = "ADD_ITEM_ATTRIBUTE_RELATION"
export const REMOVE_ITEM_ATTRIBUTE_RELATION = "REMOVE_ITEM_ATTRIBUTE_RELATION"




export const addItem = (
    item: Item,
): AddItem => ({
    type: ADD_ITEM,
    item,
});


export const addItemAndAttributeRelation = (
    relation: AttributeRelation,
): AddAttributeRelation => ({
    type: ADD_ITEM_ATTRIBUTE_RELATION,
    relation,
});

export const removeItemAndAttributeRelation = (
    relation: AttributeRelation,
): AddAttributeRelation => ({
    type: REMOVE_ITEM_ATTRIBUTE_RELATION,
    relation,
});

export const updateItem = (
    item: Item,
): AddItem => ({
    type: UPDATE_ITEM,
    item,
});

export const removeItem = (
    id: string,
): RemoveItem => ({
    type: DELETE_ITEM,
    id,
});

