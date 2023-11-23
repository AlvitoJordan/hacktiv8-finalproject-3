import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import { DUHotelManila } from "../../../assets/";
import { colors } from "../../../utils/colors";
import { TextCS } from "../../atoms";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardHotel = ({ onPress }) => {
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation();

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ImageBackground source={DUHotelManila} style={styles.image}>
          <View style={styles.imageWrapper}>
            <TouchableOpacity
              onPress={toggleFavorite}
              style={styles.favoriteIcon}
            >
              <MaterialIcons
                name={favorite ? "favorite" : "favorite-border"}
                size={25}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail Hotel")}
          style={styles.detailsContainer}
        >
          <View style={styles.leftContainer}>
            <Text numberOfLines={1} style={styles.titleHotel}>
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
    </View>
  );
};

export default CardHotel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerCard: {
    width: "100%",
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
  leftContainer: {
    width: "75%",
  },
  titleHotel: {
    fontWeight: "bold",
    fontSize: 15,
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
