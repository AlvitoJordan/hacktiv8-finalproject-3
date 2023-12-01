import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import TextCS from "../TextCS";
import { colors } from "../../../utils/colors";

const ButtonCS = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <TextCS style={[styles.text, style]}>{title}</TextCS>
    </TouchableOpacity>
  );
};

export default ButtonCS;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 20,
  },
});
