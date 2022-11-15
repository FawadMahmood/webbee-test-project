import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addItemAndAttributeRelation } from '../stores/items/actions';
import uuid from 'react-native-uuid';
import { addItemRelation } from '../stores/categories/actions';
import { ItemCard } from '../components';
import { store } from '../stores';
import { addAttribute } from '../stores/attributes/actions';
import { getRelevantTypeDataEmptyData } from '../utils/help';
import { useColumns } from '../utils/columns';
import { FlashList } from '@shopify/flash-list';

interface CategoryProps {
    route: { params: { id: string } },
    navigation: any;
}

const Category = ({ route, navigation }: CategoryProps) => {
    const dispatch = useDispatch();
    const columns = useColumns();

    const { id } = route.params;
    const category = useSelector((s: AppState) => s.categories.byIds[id])
    const itemIds = useSelector((s: AppState) => s.categories.byIds[id].itemIds)
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds)

    React.useEffect(() => {
        if (navigation) {
            navigation.setOptions({ title: category.name })
        }
    }, [category])

    const addNewItem = React.useCallback(() => {
        const new_item: Item = {
            id: uuid.v4().toString(),
            category_id: id,
            name: "New Item",
            attributeIds: []
        }


        dispatch(addItem(new_item));
        dispatch(addItemRelation({ id: id, item_id: new_item.id }));

        fieldIds.map((_, i) => {
            const field = store.getState().fields.byIds[_];

            const attr = {
                id: uuid.v4().toString(),
                field_id: field.id,
                item_id: new_item.id,
                name: "",
                type: field.type,
                value: getRelevantTypeDataEmptyData(field.type),
                category_id: id,
            };

            dispatch(addAttribute(attr));

            dispatch(addItemAndAttributeRelation({
                id: new_item.id,
                attrubute_id: attr.id
            }));
        })
    }, [dispatch, fieldIds]);


    const _renderItem = ({ item, index }: { item: string, index: number }) => {
        return <ItemCard id={item} />
    }

    return (
        <View flex >
            <View row spread padding-15>
                <Text black medium wbold style={styles.controlledWidth}>{category.name}</Text>
                <TouchableOpacity onPress={addNewItem.bind(null)} bg-blue padding-5 paddingH-10>
                    <Text white wbold>ADD NEW ITEM</Text>
                </TouchableOpacity>
            </View>


            <FlashList
                numColumns={columns}
                data={itemIds}
                renderItem={_renderItem.bind(null)}
                estimatedItemSize={200}
                contentContainerStyle={styles.contentContainerStyle}
            />

        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {},
    contentContainerStyle: {
        paddingBottom: 20,
        paddingHorizontal: 10
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});
