import React from "react";
import CardHotel from "./CardHotel";
import CardFacilities from "./CardFacilities";

const Card = ({ type, title, icon }) => {
  switch (type) {
    case "hotel":
      return <CardHotel />;
    case "facilities":
      return <CardFacilities title={title} icon={icon} />;
  }
};

export default Card;
