import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParams = {
  Home: undefined; // If you pass any params through route, you must define that types here
};
export type HomeScreenParams = NativeStackScreenProps<{}>; // add next screens if available
