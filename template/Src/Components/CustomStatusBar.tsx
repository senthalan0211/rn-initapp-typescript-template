import React from 'react';
import {View, StatusBar, ColorValue} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WHITECOLOR} from '../Utilities/Colors';
import {IS_IOS} from '../Utilities/Constants';

type barStyleType = "light-content" | "dark-content" | "default"

interface statusBarProps {
  barBackgroundColor?:ColorValue | undefined,
  barStyle?: barStyleType,
}

const CustomStatusBar = ({
  barBackgroundColor = WHITECOLOR,
  barStyle = "dark-content",
}:statusBarProps) => {
  const topInset = useSafeAreaInsets().top;
  return (
    <View
      style={[
        IS_IOS
          ? {
              height: topInset > 0 ? topInset : 20,
              backgroundColor: barBackgroundColor,
            }
          : {
              height: StatusBar.currentHeight,
            },
      ]}>
      <StatusBar
        translucent
        backgroundColor={barBackgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
export default CustomStatusBar;
