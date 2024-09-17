import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  const indicatorList = ["UNDONE", "DONE"];
  const statusColorList = [styles.undoneCircular, styles.doneCircular];

  const [indicator, setIndicator] = useState(indicatorList[0]);
  const [statusColor, setStatusColor] = useState(statusColorList[0]);

  const handleTaskDone = () => {
    if (indicator === indicatorList[0] && statusColor === statusColorList[0]) {
      setIndicator(indicatorList[1]);
      setStatusColor(statusColorList[1]);
    }
    if (indicator === indicatorList[1] && statusColor === statusColorList[1]) {
      setIndicator(indicatorList[0]);
      setStatusColor(statusColorList[0]);
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleTaskDone()}
        style={styles.itemRight}
      >
        <Text value={indicator} style={styles.statusText}>
          {indicator}
        </Text>
        <View style={statusColor}></View>
        {/* {<View style={styles.circular}></View>} */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 10,
    opacity: 0.4,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemRight: {
    backgroundColor: "#C0C0C0",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statusText: {
    color: "white",
    fontSize: 10,
    fontWeight: "900",
    marginRight: 5,
  },
  undoneCircular: {
    width: 12,
    height: 12,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55BCF6",
  },
  doneCircular: {
    width: 12,
    height: 12,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "red",
  },
});

export default Task;
