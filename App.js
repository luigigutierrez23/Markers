import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components/index.js";
import { VisibilityFilter, Buttons, Inputs, Titles } from "./shared/Literals";

export default function App() {
  const [dots, setDots] = useState([]);
  const [tmpDot, setTmpDot] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState(
    VisibilityFilter.newDot
  );
  const [visibility, setVisibility] = useState(false);
  const [dotsFilter, setDotsFilter] = useState(true);

  const togglePointsFilter = () => setDotsFilter(!dotsFilter);

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
    setVisibilityFilter(VisibilityFilter.allDot);
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} dots={dots} dotsFilter={dotsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter == VisibilityFilter.newDot ? (
          <View style={styles.form}>
            <Input
              title={Inputs.name}
              placeholder={Inputs.name}
              onChangeText={handleChangeText}
            />
            <Button title={Buttons.apply} onPress={handleSubmit} />
          </View>
        ) : (
          <List dots={dots} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
      <Panel
        onPressLeft={handleList}
        textLeft={Titles.list}
        textRight={Titles.show_hide}
        togglePointsFilter={togglePointsFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
