import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import { RootStackParams } from '../Types/RootStack.types';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootStack;
