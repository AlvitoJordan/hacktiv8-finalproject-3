import { StyleSheet,  View } from "react-native";
import React from "react";
import { FormLogin, HeaderCS } from "../../components";
import { colors } from "../../utils/colors";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <HeaderCS title={"Unlock Your Dream Getaway"} desc={"Discover seamless booking at your fingertips. Log in to manage reservations, explore exclusive offers, and make your stay unforgettable."} />
      </View>
      <FormLogin navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
});
