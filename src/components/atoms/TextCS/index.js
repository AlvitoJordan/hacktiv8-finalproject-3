import { StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";

const TextCS = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextCS;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
});
