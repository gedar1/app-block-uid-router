import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { IListCard } from '@/typings';


const { width, height } = Dimensions.get("window");

export const ListDetail = ({price,description,nameProduct}:IListCard) => {
  return (
    <View>
      <Text>ListDetail</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
      <Text>{nameProduct}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})