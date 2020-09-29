import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { Map, Modal, Panel, Input } from "./components/index.js";
import { VisibilityFilter, Buttons, Inputs, Titles } from "./shared/Literals";

export default function App() {
  const [dots, setDots] = useState([]);
  const [tmpDot, setTmpDot] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState(
    VisibilityFilter.newDot
  );
  const [visibility, setVisibility] = useState(false);

  const handLongPress = ({ nativeEvent }) => {
    setVisibilityFilter(VisibilityFilter.newDot);
    setTmpDot(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newDot = { coordinate: tmpDot, name: name };
    setDots(dots.concat(newDot));
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    console.log("entra");
    setVisibilityFilter(VisibilityFilter.newDot);
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} />
      <Modal visibility={visibility}>
        {visibilityFilter === VisibilityFilter.newDot ? (
          <>
            <Input
              title={Inputs.name}
              placeholder={Inputs.name}
              onChangeText={handleChangeText}
            />
            <Button title={Buttons.apply} onPress={handleSubmit} />
          </>
        ) : (
          <Text>"lalala"</Text>
        )}
      </Modal>
      <Panel
        onPressLeft={handleList}
        textLeft={Titles.list}
        textRight={Titles.show_hide}
      />
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
