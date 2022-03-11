import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Login Screen</Text>
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
});
