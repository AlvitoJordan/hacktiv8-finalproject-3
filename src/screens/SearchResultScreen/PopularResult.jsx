import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, SearchHotel } from "../../components";
import hotels from "../../data/hotels.json";
import CardHotel from "../../components/molecules/Card/CardHotel";

const PopularResult = ({ route }) => {
  const [filteredPlace, setFilteredPlace] = useState([]);

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
      <SearchHotel />
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
