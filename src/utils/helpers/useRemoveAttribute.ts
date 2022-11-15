import { deleteAttribute } from "../../stores/attributes/actions";
import { removeItemAndAttributeRelation } from "../../stores/items/actions";



export const removeAttributeWithReference = (dispatch: any, store: any, item_id: string, attrubute_id: string) => {
    dispatch(removeItemAndAttributeRelation({
        id: item_id,
        attrubute_id: attrubute_id
    }));
    dispatch(deleteAttribute(attrubute_id));
}