import { StyleSheet, View } from "react-native";
import React from "react";
import TextCS from "../TextCS";
import { colors } from "../../../utils/colors";

const HeaderCS = ({ title, desc }) => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.title}>{title}</TextCS>
      <TextCS style={styles.desc}>{desc}</TextCS>
    </View>
  );
};

export default HeaderCS;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: colors.white,
    width: "80%",
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.white,
    width: "80%",
    marginTop: 10,
  },
});
