import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomStatusBar from './Src/Components/CustomStatusBar';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from './Src/Stacks/MainStack';
import RootStack from './Src/Stacks/RootStack';
import {ReducerState} from './Src/Types/Reducers.types';
import SplashScreen from 'react-native-splash-screen';
import {COLORS, IS_IOS} from './Src/Utilities/Constants';

const Stack = createNativeStackNavigator();

const App = () => {
  const userToken = useSelector((state: ReducerState) => state.auth.userToken);

  useEffect(() => {
    if (!IS_IOS) {
      SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <CustomStatusBar
        barBackgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          {userToken ? (
            <Stack.Screen
              options={{headerShown: false}}
              name="MainStack"
              component={MainStack}
            />
          ) : (
            <Stack.Screen
              options={{headerShown: false}}
              name="RootStack"
              component={RootStack}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
