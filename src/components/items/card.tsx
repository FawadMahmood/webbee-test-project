import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Attribute from './attribute';
import { updateItem } from '../../stores/items/actions';
import { Card, Text, View } from 'react-native-ui-lib';
import { Bounceable } from 'rn-bounceable';
import VectorIcon from '../vector';
import { theme } from '../../utils/constants';
import { useRemoveItemWithReference } from '../../utils/helpers/useRemoveItem';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const dispatch = useDispatch();
    const item = useSelector((e: AppState) => e.items.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[item.category_id].fieldIds);
    const attributeIds = useSelector((e: AppState) => e.items.byIds[id].attributeIds);
    const category = useSelector((s: AppState) => s.categories.byIds[item.category_id]);
    const [title, setTitle] = React.useState(item.name);


    const update = (field: Item) => {
        dispatch(updateItem(field));
    }




    const removeItem = () => {
        useRemoveItemWithReference(dispatch, item.category_id, item.id);
    }

    const onChangeText = (key: string, value: any) => {
        update({ ...item, [key]: value })
    }

    const onSetTitle = (name: string) => {
        console.log("onSetTitle", typeof (name));

        switch (typeof (name)) {
            case "boolean":
                setTitle(name ? "True" : "False");
                break;
            case "string":
                setTitle(name);
                break;
            default:
                setTitle(name);
                break;


        }

    }


    return (
        <Card width={'98%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{title ? title : "Unnamed Title"}</Text>
                <Bounceable onPress={removeItem.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} onChangeText={onChangeText.bind(null, 'name')} value={item.name} />


            {attributeIds && attributeIds.map((_, i) => {
                return (
                    <Attribute id={_} nameKey={category.nameKey} onSetTitle={onSetTitle.bind(null)} />
                )
            })}

        </Card>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        // alignSelf: "center",
        // borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});
