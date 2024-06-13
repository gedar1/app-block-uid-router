import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { ViewBasic } from "@/components/atoms";
import { moderateScale } from "@/utils";
import { colors, textBasic } from "@/desingSystem";



export const Logo = () => {
  return (
    <ViewBasic style={styles.container}>
      <FontAwesome5 name="building" size={35} color={colors.yellow.base} />
      <ViewBasic style={styles.containerLogo}>
      <Text style={{...styles.textIcon,paddingRight:moderateScale(5),...textBasic.sm}}>Block</Text>
      <FontAwesome5 name="dollar-sign" size={22} color={colors.yellow.base} />
      <Text style={{...styles.textIcon,...textBasic.sm}}>ales</Text>
      </ViewBasic>
    </ViewBasic>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "70%",
    height: moderateScale(35),
  },
  containerLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "70%",
    height: moderateScale(35),
    
  },
  textIcon: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
