import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { Gap, TextCS } from "../../atoms";
import { DUHotelIbis } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import { DataCity } from "../../../data";

const TopDestination = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOP DESTINATIONS</Text>
      <ScrollView
        horizontal
        style={styles.listDestination}
        showsHorizontalScrollIndicator={false}
      >
        {DataCity.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailHotel")}
            key={item.id}
          >
            <View style={styles.imageContainer}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
              >
                <View style={styles.shadows}>
                  <Text style={styles.text}>{item.city}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopDestination;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
  },
  imageContainer: {
    overflow: "hidden",
    backgroundColor: colors.white,
    width: 175,
    height: 175,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.primary,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  shadows: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 18,
    color: colors.white,
  },
});
