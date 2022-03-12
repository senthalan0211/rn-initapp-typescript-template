import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type MainStackParams ={
    Home:undefined  // If you pass any params through route, you must define that types here
    Profile:{
        profileId:number   // params types that are passed via route from Home Screen to Profile Screen
    },
  }

  export type ProfileScreenParams = NativeStackScreenProps<MainStackParams,"Profile">