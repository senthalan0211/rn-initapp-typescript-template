import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { HomeStackParams } from '../Types/HomeStackParams.types';

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,animation:'slide_from_right'}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
