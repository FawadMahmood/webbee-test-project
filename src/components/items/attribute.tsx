import { If } from '@kanzitelli/if-component';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { DateTimePicker, Switch, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAttribute, updateAttribute } from '../../stores/attributes/actions';
import { removeItemAndAttributeRelation } from '../../stores/items/actions';
import { getKeyboardType } from '../../utils/help';
import moment from 'moment'

interface AttributeProps {
    id: string;
    onSetTitle: any;
    nameKey?: string;
}

const Attribute = ({ id, nameKey, onSetTitle }: AttributeProps) => {
    const dispatch = useDispatch();
    const attribite = useSelector((s: AppState) => s.attributes.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[attribite.category_id].fieldIds);
    const field = useSelector((s: AppState) => s.fields.byIds[attribite.field_id]);
    const categoy = useSelector((s: AppState) => s.categories.byIds[attribite.category_id]);



    React.useEffect(() => {
        if (nameKey === attribite.field_id) {
            if (onSetTitle) onSetTitle(attribite.name)
        }
    }, [attribite, categoy.nameKey, attribite.value])

    const update = (field: Attribute) => {
        dispatch(updateAttribute(field));
    }

    const onChangeText = (key: string, value: any) => {
        update({ ...attribite, [key]: value })
    }


    if (!attribite || !field) {
        return null;
    }

    console.log("attribute value", attribite);

    const onChangeDate = (date: Date) => {
        onChangeText('value', moment(date).format("DD/MM/YYYY"));
    }

    return (
        <View marginT-10>
            <If
                _={field.type === "number" || field.type === "text"}
                _then={
                    <TextInput keyboardType={getKeyboardType(field.type)} mode="outlined" label={field.name} onChangeText={onChangeText.bind(null, 'name')} value={attribite.name} />
                }
                _else={(
                    <If
                        _={field.type === "checkbox"}
                        _then={(
                            <View row>
                                <Text>{field.name + "? "}</Text>
                                <Switch value={typeof (attribite.value) === "boolean" ? attribite.value : attribite.value === "true"} onValueChange={onChangeText.bind(null, 'value')} />
                            </View>
                        )}
                        _else={(
                            <DateTimePicker style={{ height: 50, marginBottom: 0 }} title={moment(attribite.value as string).isValid() ? moment(attribite.value as string).format('DD/MM/YYYY') : "Select Date"} placeholder={'Select Date'} mode={'date'} onChange={onChangeDate.bind(null)} />
                        )}
                    />
                )}
            />

        </View>

    );
};

export default Attribute;

const styles = StyleSheet.create({
    container: {}
});
