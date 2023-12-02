import { StyleSheet, View } from "react-native";
import React from "react";
import { ICLogo } from "../../assets/";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { account, isLogin } = useSelector((state) => state.auth);

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <ICLogo />
      </View>
      <Gap height={30} />
      <View style={styles.cardContainer}>
        <TextCS style={styles.sectionTitle}>MY ACCOUNT</TextCS>
        <Gap height={20} />
        <List title={account.firstName} label={"First Name"} />
        <List title={account.lastName} label={"Last Name"} />
        <List title={account.email} label={"Email"} />
        <List type={"WithIcon"} title={account.gender} label={"Gender"} />
        <List type={"WithIcon"} title={"English"} label={"Language"} />

        {isLogin && (
          <ButtonCS
            title="Edit Profil"
            style={styles.btn_style}
            onPress={() => navigation.navigate("Edit Profile")}
          />
        )}
      </View>
      <Gap height={30} />
      <View style={styles.cardContainer}>
        <TextCS style={styles.sectionTitle}>SUPPORT</TextCS>
        <Gap height={20} />
        <List type={"WithIcon"} label={"Search History"} />
        <List type={"WithIcon"} label={"Report & Problem"} />
        <List type={"WithIcon"} label={"Terms & Policy"} />
        {isLogin && <ButtonCS title="Logout" style={styles.btn_styleLogout} />}
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
  btn_style: {
    width: 100,
    height: 30,
    padding: 5,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: colors.gray,
    color: colors.black,
    borderRadius: 8,
  },
  btn_styleLogout: {
    width: 100,
    height: 30,
    padding: 5,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
});
