import { useSelector } from "react-redux";
import { SearchHotel } from "../../components";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Alert,
} from "react-native";
import { colors } from "../../utils/colors";

const EditDetailScreen = ({ navigation }) => {
  const { search } = useSelector((state) => state.search);
  const handleSearch = () => {
    const checkInDate = new Date(search.checkIn);
    const checkOutDate = new Date(search.checkOut);
    if (search.selectedItem === "") {
      Alert.alert("Oops", "Search bar cannot be be empty", [{ text: "OK" }]);
    } else if (checkOutDate < checkInDate) {
      Alert.alert(
        "Oops",
        "Check-out time cannot be earlier than check-in time",
        [{ text: "OK" }]
      );
    } else {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <Text style={styles.title}>Change Detail</Text>
        <SearchHotel
          checkIn={search.checkIn}
          checkOut={search.checkOut}
          guest={search.guest}
          onPress={() => handleSearch()}
          type="booking"
        />
      </View>
    </SafeAreaView>
  );
};

export default EditDetailScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: colors.darkRed,
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 20,
  },
});
