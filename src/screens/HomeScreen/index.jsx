import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { ICLogo } from "../../assets";
import { Card, Gap, SearchHotel } from "../../components";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Gap height={30} />
      <ICLogo />
      <Gap height={30} />
      <SearchHotel />
      <Gap height={30} />
      <Card type={"hotel"}/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    padding: 20,
  },
});
