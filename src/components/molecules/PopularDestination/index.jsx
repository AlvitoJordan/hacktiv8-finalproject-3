import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { DUHotelIbis } from "../../../assets";

const PopularDestination = () => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.title}>Popular Destination Indonesia</TextCS>
      <Gap height={20} />
      <ScrollView horizontal style={styles.listDestination}>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image source={DUHotelIbis} style={styles.image} />
          <TextCS style={styles.location}>Hotel Ibis</TextCS>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PopularDestination;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.primary,
  },
  imageWrapper: {
    height: 240,
    backgroundColor: colors.white,
    shadowColor: "#d3d3d3",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 160,
    justifyContent: "flex-end",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  location: {
    fontWeight: "600",
    fontSize: 24,
    padding: 10,
  },
});
