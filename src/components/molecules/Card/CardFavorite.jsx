import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Gap } from "../../atoms";
import {
  ICRate,
  ICLocation,
  DUHotelManila,
  DUHotelIbis,
} from "../../../assets";
import { colors } from "../../../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardFavorite = ({ name, city, price, image,favorite,onPress }) => {
 ;
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail Hotel")}
        style={styles.wrapp_card}
      >
        <View style={styles.wrapp_rowCart}>
          <ImageBackground
            source={{ uri: image }}
            style={styles.wrappImage}
          ></ImageBackground>
          <View>
            <Text style={styles.textStyle_title}> {name}</Text>
            <ICRate />
            <Gap height={15} />
            <View style={styles.location_style}>
              <ICLocation height={10} />
              <Text style={styles.textStyle_default}> {city} </Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapp_cardPrice}>
          <View style={styles.borderFavorite}>
            <TouchableOpacity
              onPress={onPress}
              style={styles.favoriteIcon}
            >
              <MaterialIcons
                name={favorite ? "favorite" : "favorite-border"}
                size={25}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Gap height={15} />
          <Text style={styles.textStyle_price}> {price}</Text>
          <Text style={styles.textStyle_default}> Per Day </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CardFavorite;

const styles = StyleSheet.create({
  borderFavorite: {
    padding: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E8E8E8",
  },
  // =======================================

  wrapp_card: {
    flex: 1,
    height: "100%",
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    boxShadow: "0px 2px 8px 0px rgba(119, 119, 119, 0.25)",
    borderWidth: 2,
    borderColor: "#F0F0F0",
  },
  wrapp_cardPrice: {
    justifyContent: "end",
    alignItems: "flex-end",
    width: "50%",
  },
  location_style: {
    flexDirection: "row",
    alignItems: "center",
  },

  wrapp_rowCart: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    gap: 10,
  },
  wrappImage: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
  },
  textStyle_title: {
    color: colors.black,
    fontWeight: "800",
    width: "70%",
  },
  textStyle_price: {
    color: colors.primary,
    fontWeight: "600",
  },
  textStyle_default: {
    color: colors.primary,
    fontWeight: "300",
    fontSize: 10,
  },
});
