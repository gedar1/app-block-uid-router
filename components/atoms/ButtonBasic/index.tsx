import { Button, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { IButtonBasic } from '@typings/'
import { useNavigation } from "@react-navigation/native";

export const ButtonBasic : FC<Partial<IButtonBasic>> = ({handleOnPress, color, title,navigateTo, handleOnPressComponent}) => {
  
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
   <Button
   title={title ?? ''}
   onPress={handleOnPressComponent}
   color={color}
   />
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red'
    }
})