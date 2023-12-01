import { StyleSheet, ImageBackground, Text, View } from "react-native";
import React from "react";
import { Gap } from "../../atoms";
import {
  ICRate,
  ICLocation,
  ICFavorite,
  DUHotelManila,
  DUHotelIbis,
} from "../../../assets";
import { colors } from "../../../utils/colors";

const CardProfil = () => {
  return (
    <>
      <View style={styles.wrapp_card}>
        <View style={styles.wrapp_rowCart}>
          <ImageBackground
            source={DUHotelManila}
            style={styles.wrappImage}
          ></ImageBackground>
          <View>
            <Text style={styles.textStyle_title}> Hotel Indah Lestari </Text>
            <ICRate />
            <Gap height={15} />
            <View style={styles.location_style}>
              <ICLocation height={10} />
              <Text style={styles.textStyle_default}> Malang </Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapp_cardPrice}>
          <ICFavorite />
          <Gap height={15} />
          <Text style={styles.textStyle_title}> $ 1200 </Text>
          <Text style={styles.textStyle_default}> Per Day </Text>
        </View>
      </View>

      <View style={styles.wrapp_card}>
        <View style={styles.wrapp_rowCart}>
          <ImageBackground
            source={DUHotelIbis}
            style={styles.wrappImage}
          ></ImageBackground>
          <View>
            <Text style={styles.textStyle_title}> Hotel Indah Lestari </Text>
            <ICRate />
            <Gap height={15} />
            <View style={styles.location_style}>
              <ICLocation height={10} />
              <Text style={styles.textStyle_default}> Malang </Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapp_cardPrice}>
          <ICFavorite />
          <Gap height={15} />
          <Text style={styles.textStyle_title}> $ 1200 </Text>
          <Text style={styles.textStyle_default}> Per Day </Text>
        </View>
      </View>
    </>
  );
};

export default CardProfil;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  // =======================================

  containerCart: {
    width: "100%",
    alignItems: "center",
    flexDirection: "coll",
    paddingVertical: 20,
    gap: 15,
  },

  wrapp_card: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    gap: 10,
    boxShadow: "0px 2px 8px 0px rgba(119, 119, 119, 0.25)",
    borderWidth: 2,
    borderColor: "#F0F0F0",
  },
  wrapp_cardPrice: {
    justifyContent: "end",
    alignItems: "flex-end",
  },
  location_style: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerCart: {
    width: "100%",
    alignItems: "center",
    flexDirection: "coll",
    paddingVertical: 20,
    gap: 15,
  },

  wrapp_rowCart: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
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
    color: colors.primary,
    fontWeight: "600",
  },
  textStyle_default: {
    color: colors.primary,
    fontWeight: "300",
    fontSize: 10,
  },
});
