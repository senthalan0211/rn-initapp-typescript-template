import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  ProfileScreenParams } from '../Types/MainStack.types'

const Profile = ({route,navigation}:ProfileScreenParams) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Profile Screen of Id {route.params.profileId}</Text>
      <TouchableOpacity style={styles.backButton} onPress={()=>{
        navigation.goBack()
      }}><Text>Click here to go Back</Text></TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      backButton:{
        backgroundColor:'tomato',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10
      }
})