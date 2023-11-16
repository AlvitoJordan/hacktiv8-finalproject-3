import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";

const InputWithIcon = ({ icon, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} placeholderTextColor={colors.secondary} />
    </View>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  inputContainer: {
    width: 390,
    height: 60,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "100%",
    borderLeftColor: colors.secondary,
    borderLeftWidth: 3,
    marginLeft: 10,
    paddingHorizontal: 20,
    fontSize: 20,
  },
});
