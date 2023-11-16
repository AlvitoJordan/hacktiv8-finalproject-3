import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputWithIcon from "./InputWithIcon";

const InputCS = ({ typeInput, placeholder, value, onChangeText, icon }) => {
  switch (typeInput) {
    case "WithIcon":
      return <InputWithIcon placeholder={placeholder} value={value} icon={icon} onChangeText={onChangeText} />;
    default:
      null;
  }
};

export default InputCS;

const styles = StyleSheet.create({});
