import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ICLogo } from "../../assets";
import {
  Card,
  Gap,
  PopularDestination,
  SearchHotel,
  TopDestination,
} from "../../components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

const SearchResult = ({ navigation }) => {
  const [show, setShow] = useState(true);
  const handleSearchPress = () => {
    setShow(false);
  };
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back"
            size={25}
            color={colors.black}
            style={styles.icons}
          />
        </Pressable>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ICLogo />
          <SearchHotel handleSearchPress={handleSearchPress} />
          <Card
            type={"hotel"}
            onPress={() => navigation.navigate("Detail Hotel")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    height: "100%",
    padding: 20,
  },
  icons: {
    marginRight: 10,
  },
});
