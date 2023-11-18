import { StyleSheet, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";

const CardFacilities = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      {icon}
      <View>
        <Gap height={10} />
        <TextCS style={styles.text}>{title}</TextCS>
      </View>
    </View>
  );
};

export default CardFacilities;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 10,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
});
