import { removeItemRelation } from "../../stores/categories/actions"
import { removeItem } from "../../stores/items/actions";



export const useRemoveItemWithReference = (dispatch: any, category_id: string, item_id: string) => {
    dispatch(removeItemRelation({
        id: category_id,
        item_id: item_id,
    }));

    dispatch(removeItem(item_id));
}