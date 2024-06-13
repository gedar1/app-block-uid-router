import { View, StyleSheet } from 'react-native'
import React,{ FC } from 'react'
import { IViewBasic } from '../../../typings/BasicTypes'



export const ViewBasic : FC<IViewBasic> =({children,style}) => {
  return (
    <View style={[styles.container,style]} >
      { children }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

