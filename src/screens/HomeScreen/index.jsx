import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { ICLogo } from "../../assets";
import { Card, Gap, PopularDestination, SearchHotel, TopDestination } from "../../components";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <Gap height={30} />
        <ICLogo />
        <Gap height={30} />
        <SearchHotel />
        <Gap height={30} />
        {/* For Home*/}
        <TopDestination />
        <Gap height={30} />
        <PopularDestination />
        <Gap height={30} />
        {/* For Searching */}
        <Card type={"hotel"} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    padding: 20,
  },
});
