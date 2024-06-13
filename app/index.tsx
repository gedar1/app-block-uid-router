import { Link } from "expo-router";
import { Text, View, StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export default function Sreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:8
      }}
    >
      <Text>Desde Screen</Text>
      <Link style={styles.buttonPrimary} href={'/screenLogin'}>Login</Link>
      <Link style={styles.buttonPrimary}  href={'/screenMenu'}>Menu</Link>
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