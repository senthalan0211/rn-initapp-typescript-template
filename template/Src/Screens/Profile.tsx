import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProfileScreenParams} from '../Types/ProfileStackParams.types';
import CustomHeader from '../Components/CustomHeader';

const Profile = ({route, navigation}: ProfileScreenParams) => {
  return (
    <>
      <CustomHeader
        paddingHorizontal={15}
        title="Profile"
        navigation={navigation}
      />
      <View style={styles.mainContainer}>
        <Text>Profile Screen </Text>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
