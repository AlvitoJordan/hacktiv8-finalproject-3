import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  FlatList,
  Text,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import hotels from "../../data/hotels.json";

import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(hotels);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
    filterData(text);
  };

  const filterData = (text) => {
    const filteredData = hotels.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleItemPress(item.name)}>
      <View style={styles.list}>
        <FontAwesome5
          name="hotel"
          size={24}
          color={colors.secondary}
          style={styles.icons}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  );

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleItemPress = (item) => {
    dispatch(setSearch({ selectedItem: item }));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.searchContainer}>
        <Pressable onPress={handleBackPress}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.secondary}
            style={styles.backIcon}
          />
        </Pressable>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={colors.secondary}
          style={styles.searchInput}
          value={inputValue}
          onChangeText={handleInputChange}
        />
      </View>
      {inputValue !== "" && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.secondary,
    margin: 15,
  },
  backIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  flatlist: {
    marginHorizontal: 15,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icons: {
    marginRight: 10,
  },
  text: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default SearchBar;
