import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const CityCard = ({ image, city, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <View style={styles.shadows}>
            <Text style={styles.text}>{city}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    backgroundColor: colors.white,
    width: 175,
    height: 175,
    borderRadius: 15,
    marginTop: 15,
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  shadows: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 18,
    color: colors.white,
  },
});
