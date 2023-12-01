import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, SearchHotel, TextCS } from "../../components";
import hotels from "../../data/hotels.json";
import CardHotel from "../../components/molecules/Card/CardHotel";
import { Ionicons } from "@expo/vector-icons";
import { HeaderBackButton } from "@react-navigation/elements";

import { useSelector, useDispatch } from "react-redux";
import { setSearch, clearSearch } from "../../redux/searchSlice";

const SearchResult = ({ navigation}) => {
  const dispatch = useDispatch();
  const [filteredHotel, setFilteredHotel] = useState([]);
  const { search } = useSelector((state) => state.search);
 

  const handleBack = () => {
    dispatch(clearSearch());
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton label="back" onPress={() => handleBack()} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const filtered = hotels.filter(
      (hotel) => hotel.name === search.selectedItem
    );
    if (filtered) {
      setFilteredHotel(filtered);
    }
  }, []);

  handleFilter = () => {
    const filtered = hotels.filter(
      (hotel) => hotel.name === search.selectedItem
    );
    if (filtered) {
      setFilteredHotel(filtered);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <SearchHotel
        selectedItem={search.selectedItem}
        checkIn={search.checkIn}
        checkOut={search.checkOut}
        guest={search.guest}
        onPress={() => handleFilter()}
      />

      {filteredHotel.map((hotel, index) => (
        <CardHotel
          key={index}
          type={"hotel"}
          name={hotel.name}
          image={hotel.url}
          score={hotel.rating}
          city={hotel.address.city}
          place={hotel.address.place}
          region={hotel.address.region}
          price={hotel.price}
          rate={hotel.star}
          data={hotel}
          detailHotel={hotel}
        />
      ))}
    </ScrollView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  icons: {
    marginRight: 10,
  },
});
