import { StyleSheet, Text } from 'react-native'
import React,{ FC } from 'react'
import { ITextBasic } from '../../../typings/BasicTypes'

export const TextBasic : FC<Partial<ITextBasic>> =({ children,message,style } ) => {
  const {container} = styles
  
  return (
    <Text style={style}>
      {message}
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


