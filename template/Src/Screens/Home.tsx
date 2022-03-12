import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../Types/MainStack.types';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParams>>()
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>{
        navigation.navigate("Profile",{profileId:5})
      }}><Text>go to Profile</Text></TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton:{
    backgroundColor:'tomato',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10
  }
});
