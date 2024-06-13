import { View, Text } from "react-native";
import React, { FC } from "react";
import { Entypo  } from "@expo/vector-icons";
import { IIconType } from "@src/typings";
import { useNavigation } from "@react-navigation/native";


export const Icon: FC<Partial<IIconType>> = ({
  iconColor,
  iconName ,
  iconSize,
  styleViewIcon,
  isSvg,
  children,
  handleOnPress,
  isGoToBack,
  navigateTo,
  isOnPress 
}) => {

  const navigation = useNavigation();

  handleOnPress = () => {
    if(!isOnPress) return;
    isGoToBack ? navigation.goBack() : navigation?.navigate(`${navigateTo}` as never)
  }
  return (
    <View style={styleViewIcon}>
        {!isSvg ? (<Entypo
          color={iconColor}
          name={iconName}
          size={iconSize}
          onPress={handleOnPress}
        />) : children}
    </View>
  );
};