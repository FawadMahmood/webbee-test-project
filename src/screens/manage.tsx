import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryCard } from '../components';
import { store } from '../stores';
import { addCategory } from '../stores/categories/actions';
import uuid from 'react-native-uuid';
import { useColumns } from '../utils/columns';


interface ManageCategoriesProps { }

const ManageCategories = (props: ManageCategoriesProps) => {
    const catIds = useSelector((s: AppState) => s.categories.allIds);


    const dispatch = useDispatch();
    const columns = useColumns();


    const addNewCategory = React.useCallback(() => {
        const new_category: Category = {
            id: uuid.v4().toString(),
            name: "New Category",
            fieldIds: [],
            itemIds: [],
        }
        dispatch(addCategory(new_category));
    }, [dispatch]);

    const _renderItem = ({ item, index }: { item: string, index: number }) => {
        return <CategoryCard key={item + 'card'} id={item} />
    }


    return (
        <View flex spread bg-white>
            <FlashList
                numColumns={columns}
                data={catIds}
                renderItem={_renderItem.bind(null)}
                estimatedItemSize={200}
                contentContainerStyle={styles.contentContainerStyle}
            />

            <Button onPress={addNewCategory} bg-black label="ADD NEW CATEGORY" style={styles.btn} />
        </View>
    );
};

export default ManageCategories;

const styles = StyleSheet.create({
    container: {},
    contentContainerStyle: {
        paddingBottom: 20
    },
    btn: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 30
    }
});
