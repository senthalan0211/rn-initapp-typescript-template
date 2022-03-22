import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTSIZES} from '../Utilities/Constants';

interface TextBoxProps {
  textInputProps?: TextInputProps;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
}
const TextBox = ({
  textInputProps = {maxLength: 100, style: {fontSize: FONTSIZES.medium}},
  containerStyle = {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
    backgroundColor: COLORS.white,
  },
  titleStyle = {paddingVertical: 5},
  title = '',
}: TextBoxProps) => {
  return (
    <>
      <Text style={titleStyle}>{title}</Text>
      <View style={containerStyle}>
        <TextInput {...textInputProps} />
      </View>
    </>
  );
};

export default TextBox;
