import { Pressable } from "react-native";
import React, { FC } from "react";
import { IPressableBasic } from "@typings/";
import { useNavigation } from "@react-navigation/native";

export const PressableBasic: FC<Partial<IPressableBasic>> = ({
  style,
  children,
  handleOnPress,
  handleOnPressComponent,
  navigateTo,
}) => {
  const navigation = useNavigation();

  const handleOnNavigation = () => {
    navigation?.navigate(`${navigateTo}` as never);
  };
  
  handleOnPressComponent = () => {
    if (navigateTo) {
      handleOnNavigation();
    }
    if (handleOnPress) {
      handleOnPress?.();
    }
  };
  return (
    <Pressable style={style} onPress={handleOnPressComponent}>
      {children}
    </Pressable>
  );
};
