import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../utils/colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, unFavorite } from "../../../redux/favoriteSlice";
import { showError } from "../../../utils/showMessage";

const PopularCard = ({
  clickedData,
  image,
  title,
  rate,
  location,
  price,
  region,
  data,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);
  const favorite = favorites.some((item) => item.id === data.id);

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
  return (
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
        onPress={() => navigation.navigate("Detail Hotel", clickedData)}
        style={styles.detailsContainer}
      >
        <View>
          <Text numberOfLines={2} style={styles.titleHotel}>
            {title}
          </Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={15} color={colors.secondary} />
            <Text>{rate}</Text>
          </View>
          <Text style={styles.regionText}>
            {location}, {region}
          </Text>
        </View>
        <View style={styles.priceStyle}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.day}>Per Night</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
  },
  containerCard: {
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginRight: 15,
    overflow: "hidden",
    marginTop: 15,
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
