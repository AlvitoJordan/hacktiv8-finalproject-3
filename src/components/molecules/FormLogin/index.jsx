import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Gap, InputCS, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { ICEmail, ICLogo, ICPassword } from "../../../assets/";

const FormLogin = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Gap height={30} />
        <ICLogo />
        <Gap height={50} />
        <InputCS typeInput="WithIcon" icon={<ICEmail />} placeholder={"Enter Your Email"} placeholderColor={colors.secondary} />
        <Gap height={30} />
        <InputCS typeInput="WithIcon" icon={<ICPassword />} placeholder={"Enter Your Password"} placeholderColor={colors.secondary} />
        <Gap height={30} />
        <View style={styles.textContainer}>
          <View style={styles.rememberContainer}>
            <View style={styles.checkbox} />
            <TextCS>Remember Me</TextCS>
          </View>
          <TextCS style={styles.forgot}>Forgot Password ?</TextCS>
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <TextCS style={styles.textButton}>Sign In</TextCS>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 5,
  },
  forgot: {
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 6,
  },
  textButton: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 32,
  },
});
