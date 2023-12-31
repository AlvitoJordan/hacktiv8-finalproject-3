import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { DataPopular } from "../../../data";
import CityCard from "../Card/CityCard";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/searchSlice";

const PopularDestination = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePopular = (item) => {
    dispatch(setSearch({ selectedItem: item.place }));
    navigation.navigate("Popular Result", { place: item.place });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Destination</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listDestination}
      >
        {DataPopular.map((item) => (
          <CityCard
            onPress={() => handlePopular(item)}
            image={item.image}
            city={item.place}
            key={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularDestination;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 15,
  },
  containerCard: {
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginRight: 15,
    overflow: "hidden",
    marginTop: 15,
  },
  imageWrapper: {
    justifyContent: "flex-end",
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.primary,
  },
  rating: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  location: {
    fontWeight: "600",
    fontSize: 24,
    padding: 10,
  },
  favoriteIcon: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHotel: {
    fontWeight: "bold",
    fontSize: 15,
    width: 100,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 15,
  },
  priceStyle: {
    alignItems: "flex-end",
  },
  day: {
    color: colors.primary,
  },
  regionText: {
    color: colors.secondary,
  },
});
