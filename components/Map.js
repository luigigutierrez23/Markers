import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress }) => {
  return <MapView style={styles.map} onLongPress={onLongPress}></MapView>;
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
