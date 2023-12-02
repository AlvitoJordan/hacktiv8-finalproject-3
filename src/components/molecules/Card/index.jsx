import React from "react";
import CardHotel from "./CardHotel";
import CardFacilities from "./CardFacilities";
import CardCommentar from "./CardCommentar";
import CardFavorite from "./CardFavorite";

const Card = ({
  type,
  title,
  icon,
  onPress,
  name,
  city,
  price,
  image,
  favorite,
  data,
  onFavorite,
}) => {
  switch (type) {
    case "hotel":
      return <CardHotel onPress={onPress} />;
    case "facilities":
      return <CardFacilities title={title} icon={icon} />;
    case "commentar":
      return <CardCommentar />;
    case "favorite":
      return (
        <CardFavorite
          name={name}
          city={city}
          price={price}
          image={image}
          favorite={favorite}
          onPress={onPress}
          onFavorite={onFavorite}
        />
      );
  }
};

export default Card;
