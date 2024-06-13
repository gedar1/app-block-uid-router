import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Icon, PressableBasic, TextBasic, ViewBasic } from "@/components/atoms";
import { colors, textBasic } from "@/desingSystem";
import { StarRating } from "@/components/molecules";
import { moderateScale } from "@/utils";



const { width, height } = Dimensions.get("window");

export const CardProduct = () => {
  return (
    <ViewBasic style={styles.container}>
      <LinearGradient
        colors={["#C49223", "#D95E0D"]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={styles.linearGradientHeader}
      >
        <ViewBasic style={styles.nameContainer}>
        <Icon
          iconName="chevron-thin-right"
          iconSize={24}
          iconColor={colors.white}
        />
        <TextBasic
          message={"NameStore"}
          style={{ color: colors.white, ...textBasic.xs }}
        />
        </ViewBasic>
        <TextBasic
          message={"Apto 814"}
          style={{ color: colors.white, ...textBasic.xs }}
        />
      </LinearGradient>
      <PressableBasic style={styles.containerBody} navigateTo="ScreenListProduct">
        <Image
          source={require("../../../../assets/images/mediumrectangle.png")}
        />
      </PressableBasic>

      <LinearGradient
        colors={["#C49223", "#D95E0D"]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={styles.linearGradientFooter}
      >
        <PressableBasic style={styles.phoneContainer} >
        <Icon iconName="phone" iconSize={24} iconColor={colors.white} />
        <TextBasic
          message={"3202020202"}
          style={{ color: colors.white, ...textBasic.xs }}
        />
        </PressableBasic >
        <StarRating rating={3}/>
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
    height: "auto",
    justifyContent: "space-between",
    width: moderateScale(300),
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
