import { StyleSheet, View } from "react-native";
import React from "react";
import { ICLogo } from "../../assets/";
import { Gap, List, TextCS } from "../../components";
import { colors } from "../../utils/colors";

const SettingScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <ICLogo />
      </View>
      <Gap height={30} />
      <View style={styles.cardContainer}>
        <TextCS style={styles.sectionTitle}>MY ACCOUNT</TextCS>
        <Gap height={20} />
        <List title={"Syaeful"} label={"First Name"} />
        <List title={"Annas"} label={"Last Name"} />
        <List title={"syaefulannas@gmail.com"} label={"Email"} />
        <List type={"WithIcon"} title={"Male"} label={"Gender"} />
        <List type={"WithIcon"} title={"English"} label={"Language"} />
        <List type={"WithIcon"} label={"Search History"} />
        <List type={"WithIcon"} label={"Report & Problem"} />
      </View>
      <Gap height={30} />
      <View style={styles.cardContainer}>
        <TextCS style={styles.sectionTitle}>SUPPORT</TextCS>
        <Gap height={20} />
        <List type={"WithIcon"} label={"Terms & Policy"} />
        <List type={"WithIcon"} label={"Logout"} />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white_2,
    alignItems: "center",
    paddingTop: 50,
    padding: 20,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: colors.white,
    elevation: 3,
    padding: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 20,
  },
});
