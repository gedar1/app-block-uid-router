import { View, Text } from "react-native";
import React, { FC } from "react";


import { Entypo  } from "@expo/vector-icons";
import { ITextInputWhitIcon } from "@/typings";
import { Icon, InputText } from "@/components/atoms";



export const InputWhitIcon: FC<ITextInputWhitIcon> = ({
  iconColor,
  iconName = "eye-with-line",
  iconSize,
  isShowIcon,
  styleView,
  placeholder,
  placeholderTextColor
}) => {

  console.log(typeof isShowIcon)
  return (
    <View style={styleView}>
      <InputText  placeholder={placeholder} placeholderTextColor={placeholderTextColor}/>
      {isShowIcon ? 
        <Icon
          iconColor={iconColor}
          iconName={iconName}
          iconSize={iconSize}
          isSvg={false}
        />
      : null} 
    </View>
  );
};


