import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, dots, dotsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {dotsFilter &&
        dots.map((x) => (
          <Marker coordinate={x.coordinate} key={x.name} title={x.name} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
