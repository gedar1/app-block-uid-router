import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { ITemplate } from "@/typings";
import { ViewBasic } from "@/components/atoms";
import { BannerScreen } from "@/components/organisms";
import { moderateScale } from "@/utils";


const { width, height } = Dimensions.get("window");

export const ScreenBackground = ({ children, style, styleContent }: ITemplate) => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <ViewBasic style={style}>
        <BannerScreen />
        <ViewBasic style={styleContent}>{children}</ViewBasic>
      </ViewBasic>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    paddingTop: moderateScale(25),
  },
});

