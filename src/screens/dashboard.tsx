import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../stores/categories/actions';
import uuid from 'react-native-uuid';
import { FlashList } from '@shopify/flash-list';
import Category from './category';
import { View } from 'react-native-ui-lib';


interface DashboardProps { }

const Dashboard = (props: DashboardProps) => {
    const dispatch = useDispatch();
    const categories = useSelector((s: AppState) => s.categories.allIds);


    const _renderItem = ({ item, index }: { item: string, index: number }) => {
        return (
            <Category route={{ params: { id: item } }} />
        )
    }

    return (
        <View flex style={styles.container}>
            <FlashList
                data={categories}
                renderItem={_renderItem.bind(null)}
                estimatedItemSize={300}
            />
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {}
});
