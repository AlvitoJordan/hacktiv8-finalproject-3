import { StyleSheet } from "react-native";
import React from "react";
import InputWithIcon from "./InputWithIcon";

const InputCS = ({ typeInput, placeholder, value, onChangeText, icon, style, styleInput, placeholderColor,secureTextEntry }) => {
  switch (typeInput) {
    case "WithIcon":
      return <InputWithIcon placeholder={placeholder} value={value} icon={icon} onChangeText={onChangeText} style={style} styleInput={styleInput} placeholderColor={placeholderColor} secureTextEntry={secureTextEntry} />;
    default:
      null;
  }
};

export default InputCS;

const styles = StyleSheet.create({});
