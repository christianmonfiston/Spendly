import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ManageExpense() {
  return (
    <View style={styles.container}>
      <Text>ManageExpense</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
