import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import { ProfileStackParams } from '../Types/ProfileStackParams.types';

const Stack = createNativeStackNavigator<ProfileStackParams>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,animation:'slide_from_right'}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
