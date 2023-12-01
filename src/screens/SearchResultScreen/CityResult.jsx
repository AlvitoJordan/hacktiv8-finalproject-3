import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, SearchHotel, TextCS } from "../../components";
import hotels from "../../data/hotels.json";
import CardHotel from "../../components/molecules/Card/CardHotel";

const CityResult = ({ route }) => {
  const [filteredCity, setFilteredCity] = useState([]);

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
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <SearchHotel />

      {filteredCity.map((hotel, index) => (
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
