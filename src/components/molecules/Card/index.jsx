import React from "react";
import CardHotel from "./CardHotel";
import CardFacilities from "./CardFacilities";
import CardCommentar from "./CardCommentar";

const Card = ({ type, title, icon, onPress }) => {
  switch (type) {
    case "hotel":
      return <CardHotel onPress={onPress} />;
    case "facilities":
      return <CardFacilities title={title} icon={icon} />;
    case "commentar":
      return <CardCommentar />;
  }
};

export default Card;
