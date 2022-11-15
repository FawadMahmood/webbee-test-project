export const ADD_FIELD = 'ADD_FIELD';
export const UPDATE_FIELD = "UPDATE_FIELD"
export const DELETE_FIELD = "DELETE_FIELD"


export const addField = (
    field: Field,
): AddField => ({
    type: ADD_FIELD,
    field,
});


export const updateField = (
    field: Field,
): AddField => ({
    type: UPDATE_FIELD,
    field,
});


export const deleteField = (
    id: string,
): DeleteField => ({
    type: DELETE_FIELD,
    id,
});
