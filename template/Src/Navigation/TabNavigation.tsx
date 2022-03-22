import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../Assets/Svgs/Icons/home.svg';
import {BottomTabParams} from '../Types/BottomTabParams.types';
import ProfileStack from '../Stacks/ProfileStack';
import ProfileIcon from '../Assets/Svgs/Icons/profile.svg';
import {COLORS} from '../Utilities/Constants';
import HomeDrawerNavigation from './DrawerNavigation/HomeDrawerNavigation';

const Tab = createBottomTabNavigator<BottomTabParams>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let TabIcon;
          if (route.name === 'DrawerHome') {
            TabIcon = HomeIcon;
          } else {
            TabIcon = ProfileIcon;
          }
          return <TabIcon />;
        },
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
        },
        headerShown: false,
        tabBarItemStyle: {height: 40, alignSelf: 'center'},
      })}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {color: COLORS.black},
          tabBarLabel: 'Home',
        }}
        name="DrawerHome"
        component={HomeDrawerNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {color: COLORS.black},
          tabBarLabel: 'Profile',
        }}
        name="ProfileStack"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
