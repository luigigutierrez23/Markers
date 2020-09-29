import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

export default ({ onPressLeft, textLeft, textRight }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} style={styles.button} />
      <Button title={textRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "space-between",
  },
});
