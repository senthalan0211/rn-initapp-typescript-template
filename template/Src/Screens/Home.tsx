import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import {HomeScreenParams} from '../Types/HomeStackParams.types';

const Home = ({navigation, route}: HomeScreenParams) => {
  return (
    <>
      <CustomHeader paddingHorizontal={15} title="Home" />
      <View style={styles.mainContainer}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
