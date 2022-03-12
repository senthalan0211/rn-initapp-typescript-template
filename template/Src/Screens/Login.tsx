import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from '../Store/Actions/authAction';

const Login = () => {

  const dispatch = useDispatch()

  return (
    <View style={styles.mainContainer}>
      <Text>Login Screen</Text>
      <TouchableOpacity style={styles.loginButton} onPress={()=>{
        dispatch(login("token"))
      }}><Text>Click here to login</Text></TouchableOpacity>
     </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton:{
    backgroundColor:'tomato',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10
  }
});
