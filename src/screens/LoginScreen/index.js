import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderCS } from "../../components";
import { colors } from "../../utils/colors";

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <HeaderCS title={"Unlock Your Dream Getaway"} desc={"Discover seamless booking at your fingertips. Log in to manage reservations, explore exclusive offers, and make your stay unforgettable."} />
      </View>
      <View></View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});
