import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { ICLogo } from "../../assets";
import { Card, Gap, PopularDestination, SearchHotel, TopDestination } from "../../components";

const HomeScreen = ({ navigation }) => {
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
        <Card type={"hotel"} onPress={() => navigation.navigate("DetailHotel")} />
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
