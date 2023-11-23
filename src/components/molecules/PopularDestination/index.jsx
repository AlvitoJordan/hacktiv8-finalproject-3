import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import {
  DUHotelIbis,
  DUHotelManila,
  ICFavorite,
  ICRate,
} from "../../../assets";
import CardHotel from "../Card/CardHotel";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PopularDestination = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POPULAR DESTINATIONS</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listDestination}
      >
        <View style={styles.containerCard}>
          <ImageBackground source={DUHotelManila} style={styles.image}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity onPress={""} style={styles.favoriteIcon}>
                <MaterialIcons
                  name="favorite"
                  size={25}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailHotel")}
            style={styles.detailsContainer}
          >
            <View>
              <Text numberOfLines={2} style={styles.titleHotel}>
                Kingfords Hotel Manila
              </Text>
              <View style={styles.rating}>
                <Ionicons name="star" size={15} color={colors.secondary} />
                <Text>3.4</Text>
              </View>
              <Text style={styles.regionText}>Filipina</Text>
            </View>
            <View style={styles.priceStyle}>
              <TextCS style={styles.price}>$ 500</TextCS>
              <TextCS style={styles.day}>Per Night</TextCS>
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
    paddingBottom: 20,
  },
  containerCard: {
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginRight: 15,
    overflow: "hidden",
    marginVertical: 15,
  },
  imageWrapper: {
    justifyContent: "flex-end",
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.primary,
  },
  rating: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  location: {
    fontWeight: "600",
    fontSize: 24,
    padding: 10,
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHotel: {
    fontWeight: "bold",
    fontSize: 15,
    width: 100,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 15,
  },
  priceStyle: {
    alignItems: "flex-end",
  },
  day: {
    color: colors.primary,
  },
  regionText: {
    color: colors.secondary,
  },
});
