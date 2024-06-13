import { Dimensions, StyleSheet } from "react-native";
import React from "react";

import { textBasic } from '../../../desingSystem/text/index';
import { Icon, TextBasic, ViewBasic } from "@/components/atoms";
import { colors } from "@/desingSystem";
import { moderateScale } from "@/utils";

const { width, height } = Dimensions.get("window");
export const Notification = () => {
 const date = new Date();

  return (
    <ViewBasic style={styles.container}>
      <ViewBasic style={styles.containerHeader}>
        <Icon iconName="bell" iconSize={24} iconColor={colors.white} />
        <TextBasic message={date.toDateString()} style={{color: colors.white,...textBasic.xs}}/>
      </ViewBasic>
      <ViewBasic style={styles.containerBody}>
        <TextBasic message="Supension del servicio de acueducto el dia 23 de mayo de 2024" style={{...textBasic.xs}}/>
      </ViewBasic>
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
  containerHeader: {
    alignItems: "center",
    backgroundColor: colors.green.base,
    borderTopLeftRadius: moderateScale(21),
    borderTopRightRadius: moderateScale(21),
    display: "flex",
    flexDirection: "row",
    gap: moderateScale(8),
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
    paddingHorizontal: width * 0.0416,
    paddingVertical: width * 0.0416,
    width: moderateScale(300),
  },
});
