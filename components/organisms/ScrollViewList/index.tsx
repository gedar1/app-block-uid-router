import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { IScrollViewList } from '@/typings';
import { colors } from '@/desingSystem';
import { moderateScale, verticalScale } from '@/utils';


const { width, height } = Dimensions.get("window");

export const ScrollViewList: FC<Partial<IScrollViewList>> = ({children}) => {
  return (
    <ScrollView
        scrollEnabled={true}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        alwaysBounceVertical={false}
        snapToEnd={false}
        
      >
      {children}
      </ScrollView>
  )
}



const styles = StyleSheet.create({
  notificationListContainer: {
    width: width,
    // height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[25],
  },
  scrollView: {
    backgroundColor: colors.gray[25],
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    display: "flex",
    gap: moderateScale(30),   
    // height:hightVerticalScale(80),
    marginTop:verticalScale(12),
    alignItems: "center",
  },
})