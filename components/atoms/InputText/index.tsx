import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import { ITextInputBasic } from "@src/typings";

export const InputText:FC<ITextInputBasic> = ({
  autocapitalize = "none",
  handleOnChange,
  placeholder,
  placeholderTextColor,
  secureText,
  style,
  value,
}) => {
  return (
      <TextInput
        autoCapitalize={autocapitalize}
        onChangeText={handleOnChange}
        placeholder={placeholder}
        placeholderTextColor={ placeholderTextColor }
        secureTextEntry={secureText}
        style={style}
        value={value}
        
      />  
  );
};


