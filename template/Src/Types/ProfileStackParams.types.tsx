import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type ProfileStackParams ={
    Profile:undefined  // If you pass any params through route, you must define that types here
  }
export type ProfileScreenParams = NativeStackScreenProps<{}> // add next screens if available