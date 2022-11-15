import * as React from 'react';
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './dashboard';
import { Text, View } from 'react-native-ui-lib';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCategories from './manage';
import Category from './category';
import { useSelector } from 'react-redux';
import { store } from '../stores';


const Drawer = createDrawerNavigator();


export type ModalProps = {
  ExampleModal: undefined;
};

export type ScreenProps = {
  Main: undefined;
  Example: ExampleScreenProps;
  Settings: undefined;
} & ModalProps;


interface RootNavigationProps { }

const RootNavigation = (props: RootNavigationProps) => {
  const categories = useSelector((s: AppState) => s.categories.allIds);

  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="dashboard" component={Dashboard} options={{ title: "Dashboard" }} />
      {categories && categories.map((_) => {
        const name = store.getState().categories.byIds[_].name;
        return (
          <Drawer.Screen key={_ + "drawer_item"} name={_} component={Category as any} initialParams={{ id: _ }} options={{ title: name }} />
        )
      })}
      <Drawer.Screen name="manage" component={ManageCategories} options={{ title: "Manage Categories" }} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  container: {}
});
