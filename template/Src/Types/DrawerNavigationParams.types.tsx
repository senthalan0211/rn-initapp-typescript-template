import {DrawerNavigationProp} from '@react-navigation/drawer';

export type DrawerParams = {
  HomeStack: undefined; // If you pass any params through route, you must define that types here
};

export type CustomDrawerParams = DrawerNavigationProp<DrawerParams>;
