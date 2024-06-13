import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { IListCard } from "@/typings";
import { PressableBasic, TextBasic, ViewBasic } from "@/components/atoms";
import { colors, textBasic } from "@/desingSystem";
import { moderateScale } from "@/utils";


const { width, height } = Dimensions.get("window");

export const ListCard = ({price,description,nameProduct}:IListCard) => {
  return (
    <ViewBasic style={styles.container}>
      <LinearGradient
        colors={["#C49223", "#D95E0D"]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={styles.linearGradientHeader}
      >
        <ViewBasic style={styles.nameContainer}>
        <TextBasic
          message={nameProduct}
          style={{ color: colors.white, ...textBasic.xs }}
        />
        </ViewBasic>

      </LinearGradient>
      <PressableBasic style={styles.containerBody} navigateTo="ScreenListProduct">
        <Image
          source={require("../../../../../assets/images/dummy150x150.png")}
        />
      </PressableBasic>

      <LinearGradient
        colors={["#C49223", "#D95E0D"]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={styles.linearGradientFooter}
      >
        <ViewBasic style={styles.phoneContainer} >
        
        <TextBasic
          message={price}
          style={{ color: colors.white, ...textBasic.xs }}
        />
        <TextBasic message= {description}/>
        </ViewBasic >
        
      </LinearGradient>
    </ViewBasic>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray[25],
    borderColor: colors.green.base,
    borderRadius: moderateScale(21),
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    height: 'auto',
    margin:10,
    justifyContent: "space-between",
    width: moderateScale(150),
  },
  linearGradientHeader: {
    alignItems: "center",
    backgroundColor: colors.primary[500],
    borderTopLeftRadius: moderateScale(21),
    borderTopRightRadius: moderateScale(21),
    display: "flex",
    flexDirection: "row",
    gap: moderateScale(4),
    height: height * 0.0639,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.0416,
    width: "100%",
  },
  containerBody: {
    alignItems: "center",
    backgroundColor: colors.gray[25],
    borderRadius: moderateScale(21),
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "space-between",

    width: moderateScale(300),
  },
  linearGradientFooter: {
    alignItems: "center",
    backgroundColor: colors.primary[500],
    borderBottomLeftRadius: moderateScale(21),
    borderBottomRightRadius: moderateScale(21),
    display: "flex",
    flexDirection: "row",
    gap: moderateScale(8),
    height: height * 0.0639,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.0416,
    width: "100%",
  },
  phoneContainer: {
    display: "flex",
    flexDirection: "row",
    width: 'auto',
    gap: moderateScale(4)
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    width: 'auto',
    gap: moderateScale(4)
  }
});