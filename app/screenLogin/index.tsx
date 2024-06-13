
import { Collapsible } from "@/components/molecules";
import { Link } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ScreenLogin() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        columnGap:10
      }}
    >
      <Text>Desde Screen Login</Text>
      <Link style={styles.buttonPrimary} href={'/'}>index</Link>
      <Link style={styles.buttonPrimary} href={'/screenMenu'}>ScreenMenu</Link>
      <Collapsible title="prueba"/>
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