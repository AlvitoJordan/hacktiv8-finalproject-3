import { StyleSheet, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const CardFacilities = ({ type }) => {
  switch (type) {
    case "Airport shuttle":
      return (
        <View style={styles.container}>
          <MaterialIcons name="airport-shuttle" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Family Rooms":
      return (
        <View style={styles.container}>
          <MaterialIcons name="family-restroom" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Free Parking":
      return (
        <View style={styles.container}>
          <MaterialIcons name="local-parking" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Free Wifi":
      return (
        <View style={styles.container}>
          <FontAwesome5 name="wifi" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Non-smoking rooms":
      return (
        <View style={styles.container}>
          <FontAwesome5 name="smoking-ban" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Outdoor Swimming Pool":
      return (
        <View style={styles.container}>
          <FontAwesome5 name="swimming-pool" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Restaurant":
      return (
        <View style={styles.container}>
          <MaterialIcons name="restaurant" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Room Service":
      return (
        <View style={styles.container}>
          <MaterialIcons name="room-service" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
    case "Spa":
      return (
        <View style={styles.container}>
          <MaterialIcons name="spa" size={24} color="black" />
          <View>
            <TextCS style={styles.text}>{type}</TextCS>
          </View>
        </View>
      );
  }
};

export default CardFacilities;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 10,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
});
