import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { ButtonWhitIcon } from "@/components/molecules";
import { moderateScale } from "@/utils";
import { colors } from "@/desingSystem";


const { width, height } = Dimensions.get("window");
export const Menu = () => {
  return (
    <View style={styles.container}>
      <ButtonWhitIcon
        styleViewIcon={styles.buttonMenu}
        styleText={styles.textStyle}
        title="Notificaciones"
        iconName="bell"
        iconSize={24}
        iconColor="white"
        navigateTo="ScreenNotifications"
      />
      <ButtonWhitIcon
        styleViewIcon={styles.buttonMenu}
        styleText={styles.textStyle}
        title="Productos Unidad"
        iconName="shop"
        iconSize={24}
        iconColor="white"
        navigateTo="ScreenStoresBlock"
      />
      <ButtonWhitIcon
        styleViewIcon={styles.buttonMenu}
        styleText={styles.textStyle}
        title="Domicilios Externos"
        iconName="mobile"
        iconSize={24}
        iconColor="white"
        navigateTo="ScreenstoresExternal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    // borderWidth: 1,
    display: "flex",
    height: "auto",
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(40),
    rowGap: 20,
    width: "90%",
  },
  buttonMenu: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.green.base,
    borderRadius: moderateScale(21),
    display: "flex",
    height: height * 0.0639,
    paddingHorizontal: width * 0.0416,
    gap: moderateScale(8),
    width: "90%",
  },
  textStyle: {
    color:colors.white
  }
});
