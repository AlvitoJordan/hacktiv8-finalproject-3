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
import { useNavigation } from "@react-navigation/native";
import { DataCity } from "../../../data";
import CityCard from "../Card/CityCard";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/searchSlice";

const TopDestination = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCity = (item) => {
    dispatch(setSearch({ selectedItem: item.city }));
    navigation.navigate("City Result", { city: item.city });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cities in Indonesia</Text>
      <ScrollView
        horizontal
        style={styles.listDestination}
        showsHorizontalScrollIndicator={false}
      >
        {DataCity.map((item) => (
          <CityCard
            onPress={() => handleCity(item)}
            id={item.id}
            image={item.image}
            city={item.city}
            key={item.id}
          />
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
