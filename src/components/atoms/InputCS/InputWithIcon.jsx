import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const InputWithIcon = ({
  icon,
  placeholder,
  value,
  onChangeText,
  placeholderColor,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={20} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    borderColor: colors.secondary,
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderLeftColor: colors.secondary,
    color: colors.secondary,
    borderLeftWidth: 2,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  icon: {
    color: colors.secondary,
  },
});
