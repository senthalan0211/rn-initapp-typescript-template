import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainStackParams } from '../Types/MainStack.types';
import TabNavigation from '../Navigation/TabNavigation';

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,animation:'slide_from_right'}}>
      {/* <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
     
    </Stack.Navigator>
  );
};

export default MainStack;
