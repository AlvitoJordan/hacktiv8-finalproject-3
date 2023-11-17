import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { Gap, TextCS } from "../../atoms";
import { DUHotelIbis } from "../../../assets";

const TopDestination = () => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.title}>Top Destination Indonesia</TextCS>
      <Gap height={20} />
      <ScrollView horizontal style={styles.listDestination}>
        <TouchableOpacity>
          <ImageBackground source={DUHotelIbis} style={styles.image} imageStyle={{ borderRadius: 20 }}>
            <TextCS style={styles.location}>Bali</TextCS>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TopDestination;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.primary,
  },
  image: {
    width: 170,
    height: 160,
    justifyContent: "flex-end",
    padding: 20,
  },
  location: {
    fontWeight: "600",
    fontSize: 24,
    color: colors.white,
  },
});
