export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_FIELD_RELATION = 'ADD_FIELD_RELATION';
export const REMOVE_FIELD_RELATION = 'REMOVE_FIELD_RELATION';

export const ADD_ITEM_RELATION = 'ADD_ITEM_RELATION';
export const REMOVE_ITEM_RELATION = 'REMOVE_ITEM_RELATION';





export const addCategory = (
    category: Category,
): AddCategory => ({
    type: ADD_CATEGORY,
    category,
});

export const removeFieldRelation = (
    relation: CategoryRelation,
): AddCategoryItemRelation => ({
    type: REMOVE_FIELD_RELATION,
    relation,
});

export const addFieldRelation = (
    relation: CategoryRelation,
): AddCategoryItemRelation => ({
    type: ADD_FIELD_RELATION,
    relation,
});

export const addItemRelation = (
    relation: CategoryRelation,
): AddCategoryItemRelation => ({
    type: ADD_ITEM_RELATION,
    relation,
});

export const removeItemRelation = (
    relation: CategoryRelation,
): AddCategoryItemRelation => ({
    type: REMOVE_ITEM_RELATION,
    relation,
});

export const updateCategory = (
    category: Category,
): AddCategory => ({
    type: UPDATE_CATEGORY,
    category,
});


export const deleteCategory = (
    id: string,
): DeleteCategory => ({
    type: DELETE_CATEGORY,
    id,
});