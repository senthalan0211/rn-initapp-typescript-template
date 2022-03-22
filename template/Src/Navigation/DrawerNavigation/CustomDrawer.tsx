import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {COLORS} from '../../Utilities/Constants';
import {CustomDrawerParams} from '../../Types/DrawerNavigationParams.types';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

type ScreenId = 'HomeStack'; // add Your Screens id Here from customDrawerNavigationData using OR (|) symbol

type Item = {
  labelName: string;
  id: ScreenId;
};

type DrawerItemParams = {
  item: Item;
  index: number;
};

const CustomDrawer = ({}: DrawerContentComponentProps) => {
  const navigation = useNavigation<CustomDrawerParams>();

  const customDrawerNavigationData: Item[] = [
    {labelName: 'Home', id: 'HomeStack'},
  ]; //Add your screens
  const [selectedValue, setselectedValue] = useState<number>(0);

  const handleSelectedItem = ({index, item}: DrawerItemParams) => {
    setselectedValue(index);
    navigation.navigate(item.id);
  };

  const renderDrawerItem = ({item, index}: DrawerItemParams) => {
    const bgColor = selectedValue === index ? '#F5F5F5' : COLORS.white;
    const textColor = COLORS.black;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: bgColor, borderRadius: 10},
        ]}
        onPress={() => handleSelectedItem({index, item})}>
        <View style={styles.labelContainer}>
          <Text style={[styles.labelStyle, {color: textColor}]}>
            {item.labelName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text>Your Logo</Text>
        {/* Place Your Logo */}
      </View>
      <View style={styles.divider} />
      <FlatList
        bounces={false}
        data={customDrawerNavigationData}
        showsVerticalScrollIndicator={false}
        renderItem={renderDrawerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  labelStyle: {
    color: COLORS.white,
    fontSize: 14,
  },
  labelContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.black,
    opacity: 0.1,
    marginVertical: 10,
  },
});
