import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../utils/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CardFavorite = ({
  name,
  city,
  price,
  image,
  favorite,
  onPress,
  onFavorite,
  rate,
  score,
}) => {
  const ratingStar = Array.from({ length: rate }, (_, index) => (
    <Ionicons key={index} name="star" size={15} color={colors.secondary} />
  ));
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.wrapp_card}>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: image }}
            style={styles.wrappImage}
          ></ImageBackground>
          <View style={styles.rightContent}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.rating}>
              <View style={{ flexDirection: "row" }}>{ratingStar}</View>
              <Text>{parseFloat(score).toFixed(1)}</Text>
            </View>
            <Text style={styles.price}>{price} / per Night</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={15} color={colors.black} />
              <Text style={styles.city}>{city}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={onFavorite} style={styles.icon}>
            <MaterialIcons
              name={favorite ? "favorite" : "favorite-border"}
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CardFavorite;

const styles = StyleSheet.create({
  wrapp_card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 1,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  rightContent: {
    width: "50%",
  },
  wrappImage: {
    width: 120,
    height: 120,
    backgroundColor: colors.primary,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 5,
  },
  city: {
    color: colors.black,
  },
  rating: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
