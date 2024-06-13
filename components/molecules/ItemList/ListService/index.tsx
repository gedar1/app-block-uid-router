import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { IListCard } from '@/typings';


const { width, height } = Dimensions.get("window");

export const ListService = ({price,description,nameProduct}:IListCard) => {
  return (
    <View>
      <Text>ListService</Text>
      <Text>{price}</Text>
      <Text>{nameProduct}</Text>
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})