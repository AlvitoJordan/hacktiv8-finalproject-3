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
import { addFavorite, unFavorite } from "../../../redux/favoriteSlice";
import { useSelector, useDispatch } from "react-redux";

const CardHotel = ({
  id,
  onPress,
  image,
  name,
  score,
  city,
  place,
  region,
  price,
  rate,
  data,
}) => {
  const navigation = useNavigation();
  const { favorites } = useSelector((state) => state.favorite);
  const favorite = favorites.some((item) => item.id === data.id);
  const dispatch = useDispatch();
  const toggleFavorite = (data) => {
    try {
      const isAlreadyFavorite = favorites.some((item) => item.id === data.id);
      if (isAlreadyFavorite) {
        dispatch(unFavorite(data));
      } else {
        dispatch(addFavorite(data));
      }
    } catch (error) {
      showError(error);
    }
  };

  const ratingStar = Array.from({ length: rate }, (_, index) => (
    <Ionicons key={index} name="star" size={15} color={colors.secondary} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.imageWrapper}>
            <TouchableOpacity
              onPress={() => toggleFavorite(data)}
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
          onPress={() => navigation.navigate("Detail Hotel", { id: id })}
          style={styles.detailsContainer}
        >
          <View style={styles.leftContainer}>
            <Text numberOfLines={1} style={styles.titleHotel}>
              {name}
            </Text>
            <View style={styles.rating}>
              <View style={{ flexDirection: "row" }}>{ratingStar}</View>
              <Text>{score}</Text>
            </View>
            <Text style={styles.regionText}>
              {city}, {place}, {region}
            </Text>
          </View>
          <View style={styles.priceStyle}>
            <TextCS style={styles.price}>{price}</TextCS>
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
