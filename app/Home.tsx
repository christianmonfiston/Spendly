import { Text, View, StyleSheet } from "react-native";
import colors from "@/constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home working</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },

  text: {
    color: "black",
  },
});
