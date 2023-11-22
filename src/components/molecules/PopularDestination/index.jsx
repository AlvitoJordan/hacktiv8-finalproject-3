import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { DUHotelIbis, DUHotelManila, ICFavorite, ICRate } from "../../../assets";
import CardHotel from "../Card/CardHotel";
import { Colors } from "react-native/Libraries/NewAppScreen";

const PopularDestination = () => {
  return (
    <View style={styles.container}>
      <TextCS style={styles.title}>Popular Destination Indonesia</TextCS>
      <Gap height={20} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listDestination}>
        <View style={styles.containerCard}>
          <ImageBackground source={DUHotelManila} style={styles.image} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity style={styles.favoriteIcon}>
                <ICFavorite />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity onPress={""} style={styles.detailsContainer}>
            <View>
              <TextCS style={styles.titleHotel}>Kingfords Hotel Manila</TextCS>
              <Gap height={5} />
              <ICRate />
              <Gap height={10} />
              <TextCS>Filipina</TextCS>
            </View>
            <View>
              <TextCS style={styles.price}>$ 500</TextCS>
              <TextCS style={styles.day}>Per day</TextCS>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerCard}>
          <ImageBackground source={DUHotelIbis} style={styles.image} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity style={styles.favoriteIcon}>
                <ICFavorite />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity onPress={""} style={styles.detailsContainer}>
            <View>
              <TextCS style={styles.titleHotel}>Kingfords Hotel Manila</TextCS>
              <Gap height={5} />
              <ICRate />
              <Gap height={10} />
              <TextCS>Filipina</TextCS>
            </View>
            <View>
              <TextCS style={styles.price}>$ 500</TextCS>
              <TextCS style={styles.day}>Per day</TextCS>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularDestination;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom:20
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.primary,
  },
  imageWrapper: {
    height: 240,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderColor: colors.gray,
    borderWidth: 3,
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
  containerCard: {
    width: 220,
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 300,
    marginRight:10,
    elevation: 1,
    borderWidth:2,
    borderColor: colors.gray
  },
  image: {
    height: 180,
    padding: 10,
  },
  imageWrapper: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  favoriteIcon: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHotel: {
    fontWeight: "700",
    fontSize: 15,
    width: 100
  },
  price: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 15,
  },
  day: {
    color: colors.primary,
  },
});
