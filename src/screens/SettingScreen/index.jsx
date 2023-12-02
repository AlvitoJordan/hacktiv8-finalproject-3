import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Image,
} from "react-native";
import React from "react";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "../../redux/authSlice";
import LoginRedirect from "../../components/molecules/LoginRedirect";

const SettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLogin, account } = useSelector((state) => state.auth);
  const { image } = account;

  const handleLogOut = () => {
    dispatch(signOut());
  };
  const dummyProfile =
    "https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png";
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Settings</Text>
          <View style={styles.cardContainer}>
            <TextCS style={styles.sectionTitle}>MY ACCOUNT</TextCS>
            {isLogin ? (
              <>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: image || dummyProfile }}
                    style={styles.wrapp_img}
                  />
                </View>
                <List title={account.firstName} label={"First Name"} />
                <List title={account.lastName} label={"Last Name"} />
                <List title={account.email} label={"Email"} />
                <List title={account.phoneNumber} label={"Phone Number"} />
                <List title={account.gender} label={"Gender"} />

                <ButtonCS
                  title="Edit Profile"
                  style={styles.btn_style}
                  onPress={() => navigation.navigate("Edit Profile")}
                />
              </>
            ) : (
              <LoginRedirect
                name={"profile"}
                content={"Log in to start planning your hotel booking"}
                onPress={() => navigation.navigate("Login")}
              />
            )}
          </View>
          <Gap height={30} />
          <View style={styles.cardContainer}>
            <TextCS style={styles.sectionTitle}>SUPPORT</TextCS>
            <Gap height={20} />
            <List title={"English"} label={"Language"} />
            <List type={"WithIcon"} label={"Report & Problem"} />
            <List type={"WithIcon"} label={"Terms & Policy"} />
            {isLogin && (
              <ButtonCS
                title="Logout"
                style={styles.btn_styleLogout}
                onPress={handleLogOut}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  screen: { flex: 1, backgroundColor: colors.white_2 },
  container: {
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  wrapp_img: {
    borderRadius: 50,
    width: 100,
    height: 100,
    overflow: "hidden",
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
  title: {
    color: colors.darkRed,
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 20,
  },
});
