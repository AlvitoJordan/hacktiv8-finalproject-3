import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardHotel from "./CardHotel";

const Card = ({ type }) => {
  switch (type) {
    case "hotel":
      return <CardHotel />;
  }
};

export default Card;

const styles = StyleSheet.create({});
