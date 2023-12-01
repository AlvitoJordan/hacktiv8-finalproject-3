import { StyleSheet, View } from "react-native";
import React from "react";
import { TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { ICArrowRight } from "../../../assets";

const ListWithIcon = ({ label, title }) => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.label}>{label}</TextCS>
      <View style={styles.titleContainer}>
        <TextCS style={styles.title}>{title}</TextCS>
        <ICArrowRight />
      </View>
    </View>
  );
};

export default ListWithIcon;

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
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
