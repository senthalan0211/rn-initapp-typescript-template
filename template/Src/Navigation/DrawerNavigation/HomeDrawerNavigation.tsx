import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeStack from '../../Stacks/HomeStack';
import {DrawerParams} from '../../Types/DrawerNavigationParams.types';

const Drawer = createDrawerNavigator<DrawerParams>();

const HomeDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigation;
