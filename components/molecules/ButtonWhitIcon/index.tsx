import { StyleSheet } from "react-native";
import React, { FC } from "react";
import { Icon, PressableBasic, TextBasic } from "@/components/atoms";
import { IButtonWhitIcon } from "@/typings";

export const ButtonWhitIcon: FC<Partial<IButtonWhitIcon>> = ({
  styleViewIcon,
  handleOnPressComponent,
  title,
  iconName,
  iconColor,
  iconSize,
  styleText,
  navigateTo
}) => {
  return (
    <PressableBasic
      style={styleViewIcon}
      handleOnPress={handleOnPressComponent}
      navigateTo={navigateTo}
    >
      <Icon iconName={iconName} iconColor={iconColor} iconSize={iconSize}/>
      <TextBasic message={title} style={styleText}/>
    </PressableBasic>
  );
};

const styles = StyleSheet.create({});
