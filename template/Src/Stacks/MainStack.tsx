import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { MainStackParams } from '../Types/MainStack.types';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,animation:'slide_from_right'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
     
    </Stack.Navigator>
  );
};

export default MainStack;
