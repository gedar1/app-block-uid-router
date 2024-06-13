import { View, StyleSheet, Dimensions } from "react-native";
import React, { FC } from "react";
import { INavigationType } from "@/typings";
import { useBasicContext } from "@/contexts";
import { InputText, TextBasic, ViewBasic } from "@/components/atoms";
import { colors, textBasic } from "@/desingSystem";
import { ButtonWithLoader, InputWhitIcon } from "@/components/molecules";
import { moderateScale } from "@/utils";


const { width, height } = Dimensions.get("window");

export const FormLogin :FC<Partial<INavigationType>> = ({navigateTo,navigation,handleOnPressNavigation}) => {
  const { setUser } = useBasicContext();
  
  // const handleButtonLogin = () => {
  //  navigation?.navigate('ScreenMenu')
  //  console.log('handleButtonLogin')
  // };
  // const configTextInputPassword: ITextInputBasic = {
  //   placeholder: "enter",
  //   placeholderTextColor: "gray",
  //   style: styles.inputStyle,
  // };

  return (
    <ViewBasic style={styles.container}>
      <InputText
        style={styles.inputStyle}
        placeholder="username"
        placeholderTextColor={colors.gray[100]}
      />
      <InputWhitIcon
        iconColor={colors.primary.base}
        iconName="eye-with-line"
        iconSize={20}
        isShowIcon={true}
        placeholder="password"
        placeholderTextColor={colors.gray[100]}
        styleView={styles.inputStyleIcon}
      />
      <ViewBasic style={styles.forgotContainer}>
        
      <TextBasic
        message="Forgot your password?"
        style={{ ...styles.textForgotPassword, ...textBasic.xxs }}
      />
      </ViewBasic>
      <ButtonWithLoader
        handleOnPress={handleOnPressNavigation}
        style={styles.pressableBasic}
        styleText={styles.textButtonLogin}
        navigateTo={navigateTo}  
        title="Login"    
      />
    </ViewBasic>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    display: "flex",
    height: "auto",
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(40),
    rowGap: 20,
    width: "90%",
  },
  forgotContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "90%",
    height: 'auto'
  },
  inputStyle: {
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    color: "white",
    height: height * 0.0639,
    paddingLeft: width * 0.0416,
    width: "80%",
  },
  inputStyleIcon: {
    alignItems: "center",
    borderColor: colors.primary.base,
    borderRadius: width * 0.0194,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: height * 0.0639,
    paddingLeft: width * 0.0416,
    paddingRight: width * 0.0416,
    width: "80%",
  },
  pressableBasic: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary[400],
    borderRadius: width * 0.0194,
    display: "flex",
    height: height * 0.0639,
    paddingLeft: width * 0.0416,
    width: moderateScale(150),
  },
  textForgotPassword: {
    color: colors.gray[900],
  },

  textButtonLogin: {
    color: colors.white,
  },
});

