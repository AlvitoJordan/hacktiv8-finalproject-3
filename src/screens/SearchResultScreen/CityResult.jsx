import { Alert, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SearchHotel } from "../../components";
import hotels from "../../data/hotels.json";
import CardHotel from "../../components/molecules/Card/CardHotel";
import { useSelector, useDispatch } from "react-redux";

import { HeaderBackButton } from "@react-navigation/elements";
import { clearSearch } from "../../redux/searchSlice";

const CityResult = ({ navigation, route }) => {
  const [filteredCity, setFilteredCity] = useState([]);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  handleFilter = () => {
    const checkInDate = new Date(search.checkIn);
    const checkOutDate = new Date(search.checkOut);
    if (search.selectedItem === "") {
      Alert.alert("Oops", "Search bar cannot be be empty", [{ text: "OK" }]);
    } else if (checkOutDate < checkInDate) {
      Alert.alert(
        "Oops",
        "Check-out time cannot be earlier than check-in time",
        [{ text: "OK" }]
      );
    } else {
      const filtered = hotels.filter(
        (hotel) => hotel.name === search.selectedItem
      );
      if (filtered) {
        setFilteredCity(filtered);
      }
    }
  };

  useEffect(() => {
    if (route.params?.city) {
      const filteredHotel = hotels.filter(
        (hotel) => hotel.address.city === route.params?.city
      );
      if (filteredHotel) {
        setFilteredCity(filteredHotel);
      }
    }
  }, [route.params?.city]);
  const handleBack = () => {
    dispatch(clearSearch());
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.city,
      headerLeft: () => <HeaderBackButton label="back" onPress={handleBack} />,
    });
  }, [navigation]);

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

      {filteredCity.map((hotel, index) => (
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

export default CityResult;

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
