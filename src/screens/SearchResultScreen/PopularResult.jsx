import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SearchHotel } from "../../components";
import hotels from "../../data/hotels.json";
import CardHotel from "../../components/molecules/Card/CardHotel";
import { useSelector, useDispatch } from "react-redux";
import { clearSearch } from "../../redux/searchSlice";
import { HeaderBackButton } from "@react-navigation/elements";

const PopularResult = ({ navigation, route }) => {
  const [filteredPlace, setFilteredPlace] = useState([]);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  const handleBack = () => {
    dispatch(clearSearch());
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.place,
      headerLeft: () => (
        <HeaderBackButton label="back" onPress={() => handleBack()} />
      ),
    });
  }, [navigation]);

  handleFilter = () => {
    const checkInDate = new Date(search.checkIn);
    const checkOutDate = new Date(search.checkOut);
    if (search.selectedItem === "") {
      Alert.alert("Oops", "Search bar cannot be be empty", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else if (checkOutDate < checkInDate) {
      Alert.alert(
        "Oops",
        "Check-out time cannot be earlier than check-in time",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } else {
      const filtered = hotels.filter(
        (hotel) => hotel.name === search.selectedItem
      );
      if (filtered) {
        setFilteredPlace(filtered);
      }
    }
  };

  useEffect(() => {
    if (route.params?.place) {
      const filteredHotel = hotels.filter(
        (hotel) => hotel.address.place === route.params?.place
      );
      if (filteredHotel) {
        setFilteredPlace(filteredHotel);
      }
    }
  }, [route.params?.place]);
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
      {filteredPlace.map((hotel, index) => (
        <CardHotel
          key={index}
          id={hotel.id}
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

export default PopularResult;

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
