import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DUHotelManila, ICFavorite, ICRate } from "../../../assets/";
import { colors } from "../../../utils/colors";
import { Gap, TextCS } from "../../atoms";

const CardHotel = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={DUHotelManila} style={styles.image} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.favorite}>
            <ICFavorite />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.detail}>
        <View style={styles.detailHotel}>
          <TextCS style={styles.title}>Kingfords Hotel Manila</TextCS>
          <Gap height={5} />
          <ICRate />
          <Gap height={10} />
          <TextCS style={styles.location}>Filipina</TextCS>
        </View>
        <View style={styles.detailPrice}>
          <TextCS style={styles.price}>$ 500</TextCS>
          <TextCS style={styles.day}>Per day</TextCS>
        </View>
      </View>
    </View>
  );
};

export default CardHotel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 300,
    shadowColor: "#d3d3d3",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    height: 180,
    padding: 10,
  },
  wrapper: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  favorite: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
  
    fontWeight: "700",
    fontSize: 20,
  },
  location: {
 
  },
  price: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 20,
  },
  day: {
    color: colors.primary,
  },
});
