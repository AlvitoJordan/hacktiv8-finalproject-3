import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";

const ListDefault = ({ label, title }) => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.label}>{label}</TextCS>
      <TextCS style={styles.title}>{title}</TextCS>
    </View>
  );
};

export default ListDefault;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  label: {
    fontWeight: "600",
  },
  title: {
    fontWeight: "500",
  },
});
