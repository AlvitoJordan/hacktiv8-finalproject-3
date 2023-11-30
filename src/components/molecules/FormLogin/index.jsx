import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Gap, InputCS, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { ICEmail, ICLogo, ICPassword } from "../../../assets/";
import { showError } from "../../../utils/showMessage";
import { useDispatch } from "react-redux";
import { DataAccounts } from "../../../data";
import { signInAct } from "../../../redux/authSlice";
import { setLoading } from "../../../redux/loadingSlice";

const FormLogin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSignin = () => {
    try {
      dispatch(setLoading(true));
      if (form.email.length < 5 || form.password.length < 5) {
        dispatch(setLoading(false));
        showError("Email dan password kurang dari 5");
      } else {
        const user = DataAccounts.find((u) => u.email === form.email && u.password === form.password);

        if (user) {
          setTimeout(() => {
            dispatch(setLoading(false));
            dispatch(signInAct(user));
            navigation.replace("MainApp");
          }, 2000);
        } else {
          setTimeout(() => {
            dispatch(setLoading(false));
            showError("Email atau password salah");
          }, 2000);
        }
      }
    } catch (error) {
      showError(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Gap height={30} />
        <ICLogo />
        <Gap height={50} />
        <InputCS typeInput="WithIcon" icon={<ICEmail />} placeholder={"Enter Your Email"} placeholderColor={colors.secondary} value={form.email} onChangeText={(value) => setForm({ ...form, email: value })} />
        <Gap height={30} />
        <InputCS
          typeInput="WithIcon"
          icon={<ICPassword />}
          placeholder={"Enter Your Password"}
          placeholderColor={colors.secondary}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
          secureTextEntry={true}
        />
        <Gap height={30} />
        <View style={styles.textContainer}>
          <View style={styles.rememberContainer}>
            <View style={styles.checkbox} />
            <TextCS>Remember Me</TextCS>
          </View>
          <TextCS style={styles.forgot}>Forgot Password ?</TextCS>
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <TextCS style={styles.textButton}>Sign In</TextCS>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    width:"100%",
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
