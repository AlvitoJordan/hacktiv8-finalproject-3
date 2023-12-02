import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
import { Gap, InputCS, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { showError } from "../../../utils/showMessage";
import { useDispatch } from "react-redux";
import { DataAccounts } from "../../../data";
import { signInAct } from "../../../redux/authSlice";
import { setLoading } from "../../../redux/loadingSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSignin = () => {
    const redirectScreen = route.params?.redirectScreen;
    const params = route.params?.params;
    try {
      dispatch(setLoading(true));
      if (form.email.length < 5 || form.password.length < 5) {
        dispatch(setLoading(false));
        showError("Email dan password kurang dari 5");
      } else {
        const user = DataAccounts.find(
          (u) => u.email === form.email && u.password === form.password
        );

        if (user) {
          setTimeout(() => {
            dispatch(setLoading(false));
            dispatch(signInAct(user));
            if (redirectScreen && params) {
              navigation.replace(redirectScreen, params);
            } else {
              navigation.goBack();
            }
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
        <Text style={styles.title}>Login</Text>
        <Gap height={20} />
        <InputCS
          typeInput="WithIcon"
          icon={"mail"}
          placeholder={"Enter Your Email"}
          placeholderColor={colors.secondary}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <Gap height={30} />
        <InputCS
          typeInput="WithIcon"
          icon={"lock-open"}
          placeholder={"Enter Your Password"}
          placeholderColor={colors.secondary}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
          secureTextEntry={true}
        />
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
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    flex: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
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
    fontWeight: "bold",
    fontSize: 32,
  },
  title: {
    color: colors.darkRed,
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 20,
  },
});
