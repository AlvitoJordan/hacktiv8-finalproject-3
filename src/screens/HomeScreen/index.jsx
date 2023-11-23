import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { ICLogo } from "../../assets";
import {
  Card,
  Gap,
  PopularDestination,
  SearchHotel,
  TopDestination,
} from "../../components";


const HomeScreen = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ICLogo />
          <SearchHotel />
          {/* For Home*/}
          <TopDestination />

          <PopularDestination />

          {/* For Searching */}
          <Card
            type={"hotel"}
            onPress={() => navigation.navigate("DetailHotel")}
          />
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
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    padding: 20,
  },
});
