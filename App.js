import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Map, Modal, Panel } from "./components/index.js";

export default function App() {
  const handLongPress = (dot) => {
    console.log(dot);
  };
  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} />
      <Modal />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
