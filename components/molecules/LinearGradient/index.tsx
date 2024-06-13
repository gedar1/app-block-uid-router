import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { ViewBasic } from '@/components/atoms';
import { IViewLinearGradient } from '@/typings';


export const ViewLinearGradient : FC<IViewLinearGradient> = ({
  children,startColor,endColor,style,styleLinear
}) => {
  return (
    <ViewBasic style={style}>
     <LinearGradient
     style={styleLinear}
      colors={[startColor,endColor]}
      end={{ x: 1, y: 1.2 }}
      start={{ x: 1, y: 0.1 }}
      locations={[0.1, 0.9]}    
      >
       {children}

     </LinearGradient>
    </ViewBasic>
  )
}
