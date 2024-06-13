import { HelloWave } from "@/components/molecules";
import { Link } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ScreenMenu() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        columnGap:10
      }}
    >
      <HelloWave/>
      <Text>Desde ScreenMenu</Text>
      <Link style={styles.buttonPrimary} href={'/'}>index</Link>
      <Link style={styles.buttonPrimary} href={'/screenLogin'}>ScreenLogin</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#FF6701',
      borderRadius: width * 0.0194,
      display: "flex",
      height: height * 0.0639,
      paddingLeft: width * 0.0416,
      width: 150,
    },

})