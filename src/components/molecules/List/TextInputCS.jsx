import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";

const ListDefault = ({ label, title, onChange }) => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.label}>{label}</TextCS>
      <TextInput style={styles.title} onChangeText={onChange}>{title}</TextInput>
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
