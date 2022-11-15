import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Card, Picker, Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { addField } from '../../stores/fields/actions';
import { addFieldRelation, deleteCategory, updateCategory } from '../../stores/categories/actions';
import AttributesField from './field';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '../../components';
import { theme } from '../../utils/constants';
import { store } from '../../stores';
import { getRelevantTypeDataEmptyData, inputTypes } from '../../utils/help';
import { addAttribute, deleteAttribute } from '../../stores/attributes/actions';
import { addItemAndAttributeRelation, removeItemAndAttributeRelation } from '../../stores/items/actions';
import { useRemoveItemWithReference } from '../../utils/helpers/useRemoveItem';

interface CategoryCardProps {
    id: string;
}

const options = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Date', value: 'date' }
];


const CategoryCard = ({ id }: CategoryCardProps) => {
    const category = useSelector((s: AppState) => s.categories.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds);
    const dispatch = useDispatch();

    const titleSelections = fieldIds.map(s => {
        const field = store.getState().fields.byIds[s];
        return { label: field.name, value: field.id }
    })


    const onAddNewField = (type: FieldType) => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            name: "",
            type: type,
        }
        dispatch(addField(field));
        dispatch(addFieldRelation({ id: id, item_id: field.id }));
        console.log(category.itemIds);

        category.itemIds.map((_) => {
            const attr = {
                id: uuid.v4().toString(),
                field_id: field.id,
                item_id: _,
                name: "",
                type: field.type,
                value: getRelevantTypeDataEmptyData(field.type),
                category_id: category.id,
            };

            dispatch(addAttribute(attr));
            dispatch(addItemAndAttributeRelation({
                id: _,
                attrubute_id: attr.id
            }));
        })
    }

    const removeCategory = () => {
        dispatch(deleteCategory(id));
    }

    const update = (field: Category) => {
        dispatch(updateCategory(field));
    }


    const onChangeText = (key: string, value: any) => {
        update({ ...category, [key]: value })
    }


    const onAddField = (props: FieldType) => {
        onAddNewField(props);
    }

    const onHeaderKeySelection = (props: string) => {
        update({ ...category, nameKey: props })
    }

    const onValueSelect = () => {

    }

    const onRemovedItem = (field: string) => {
        console.log("onRemovedItem", field);
        category.itemIds.map((_) => {
            store.getState().items.byIds[_].attributeIds.map((attr) => {
                if (store.getState().attributes.byIds[attr].field_id === _) {
                    useRemoveItemWithReference(dispatch, store.getState().attributes.byIds[attr].item_id, store.getState().attributes.byIds[attr].id);
                    // dispatch(removeItemAndAttributeRelation({
                    //     id: store.getState().attributes.byIds[attr].item_id,
                    //     attrubute_id: store.getState().attributes.byIds[attr].id
                    // }));
                    // dispatch(deleteAttribute(store.getState().attributes.byIds[attr].id));
                }
            })
        })
    }

    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{category.name}</Text>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} onChangeText={onChangeText.bind(null, 'name')} value={category.name} />

            {fieldIds && fieldIds.map((_, i) => {
                return (
                    <AttributesField onRemovedItem={onRemovedItem.bind(null)} key={_ + 'attribute'} id={_} />
                )
            })}

            <View height={10} />


            {/* @ts-ignore */}
            <Picker
                migrate
                migrateTextField
                value={''}
                onChange={onAddField.bind(null)}
                placeholder="Add New Item"
                fieldType={Picker.fieldTypes.filter}
                marginB-s3
            >
                {inputTypes.map(filter => (
                    <Picker.Item key={filter.value} {...filter} />
                ))}
            </Picker>


            {/* @ts-ignore */}
            <Picker
                migrate
                migrateTextField
                value={''}
                onChange={onHeaderKeySelection.bind(null)}
                placeholder="Select Header Text"
                fieldType={Picker.fieldTypes.filter}
                marginB-s3
            >
                {titleSelections.map(filter => (
                    // @ts-ignore
                    <Picker.Item key={filter.value} {...filter} />
                ))}
            </Picker>
        </Card>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});
