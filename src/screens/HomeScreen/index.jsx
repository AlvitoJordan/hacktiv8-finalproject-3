import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";

import React, { useEffect } from "react";

import {
  PopularDestination,
  SearchHotel,
  TopDestination,
} from "../../components";
import { colors } from "../../utils/colors";
import WelcomeCard from "../../components/molecules/Card/WelcomeCard";
import SignInCard from "../../components/molecules/Card/SignInCard";

import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../redux/searchSlice";
import moment from "moment";

const HomeScreen = ({ navigation }) => {
  const { isLogin, account } = useSelector((state) => state.auth);
  useEffect(() => {}, [isLogin]);

  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment(today).add(1, "day").format("YYYY-MM-DD");

  const handleSearch = () => {
    navigation.navigate("Search Result");
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <WelcomeCard name={account.firstName || "Guest"} />

          <SearchHotel
            selectedItem={search.selectedItem}
            checkIn={search.checkIn}
            checkOut={search.checkOut}
            guest={search.guest}
            onPress={() => handleSearch()}
          />
          {isLogin ? null : (
            <SignInCard onPress={() => navigation.navigate("Login")} />
          )}
          <TopDestination />
          <PopularDestination />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 16,
    color: "#810829",
  },
  name: {
    fontSize: 20,
    color: "#810829",
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.gray,
    marginVertical: 15,
  },
  leftContainer: {
    flex: 1,
    marginRight: 5,
  },
  buttons: {
    backgroundColor: colors.secondary,
    width: "50%",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
