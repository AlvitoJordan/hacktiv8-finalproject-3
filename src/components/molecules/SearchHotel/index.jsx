import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../utils/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../../redux/searchSlice";

const SearchHotel = ({ selectedItem, checkIn, checkOut, guest, onPress }) => {
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [searchForm, setSearchForm] = useState({
    selectedItem: selectedItem,
    checkIn: checkIn,
    checkOut: checkOut,
    guest: guest,
  });

  const increaseGuestCount = () => {
    if (searchForm.guest < 7) {
      setSearchForm({ ...searchForm, guest: searchForm.guest + 1 });
      dispatch(setSearch({ guest: guest + 1 }));
    }
  };

  const decreaseGuestCount = () => {
    if (guest > 1) {
      setSearchForm({ ...searchForm, guest: searchForm.guest - 1 });
      dispatch(setSearch({ guest: guest - 1 }));
    }
  };

  const showDatePicker = (type) => {
    if (type === "checkIn") {
      setShowCheckInDatePicker(true);
    } else {
      setShowCheckOutDatePicker(true);
    }
  };

  const hideDatePicker = (type) => {
    if (type === "checkIn") {
      setShowCheckInDatePicker(false);
    } else {
      setShowCheckOutDatePicker(false);
    }
  };

  const handleDateConfirm = (type, date) => {
    if (type === "checkIn") {
      hideDatePicker(type);
      setSearchForm({
        ...searchForm,
        checkIn: moment(date).format("YYYY-MM-DD"),
      });
      dispatch(setSearch({ checkIn: moment(date).format("YYYY-MM-DD") }));
    } else {
      hideDatePicker(type);
      setSearchForm({
        ...searchForm,
        checkOut: moment(date).format("YYYY-MM-DD"),
      });
      dispatch(
        setSearch({
          checkOut: moment(date).format("YYYY-MM-DD"),
        })
      );
    }
  };

  const handleSearch = () => {
    dispatch(setSearch(searchForm));
    navigation.navigate("Search Result");
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.textInput}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons
          name="search"
          size={15}
          color={colors.primary}
          style={styles.icon}
        />
        <TextInput
          editable={false}
          style={styles.text}
          placeholder="Where Do You Want Go ?"
          placeholderTextColor={colors.primary}
          value={selectedItem}
        ></TextInput>
      </Pressable>

      <View style={styles.datePickerContainer}>
        <View style={styles.twoRowWidth}>
          <Pressable
            style={styles.datePickerInput}
            onPress={() => showDatePicker("checkIn")}
          >
            <Ionicons
              name="calendar"
              size={15}
              color={colors.primary}
              style={styles.icon}
            />
            <TextInput
              editable={false}
              style={styles.text}
              value={searchForm.checkIn}
            ></TextInput>
          </Pressable>
          <DateTimePickerModal
            isVisible={showCheckInDatePicker}
            display="default"
            mode="date"
            date={new Date(searchForm.checkIn)}
            minimumDate={new Date()}
            onConfirm={(date) => handleDateConfirm("checkIn", date)}
            onCancel={() => hideDatePicker("checkIn")}
          />
        </View>
        <View style={styles.twoRowWidth}>
          <Pressable
            style={styles.datePickerInput}
            onPress={() => showDatePicker("checkOut")}
          >
            <Ionicons
              name="calendar"
              size={15}
              color={colors.primary}
              style={styles.icon}
            />
            <TextInput
              editable={false}
              style={styles.text}
              value={searchForm.checkOut}
            ></TextInput>
          </Pressable>
          <DateTimePickerModal
            isVisible={showCheckOutDatePicker}
            display="default"
            mode="date"
            date={new Date(searchForm.checkOut)}
            minimumDate={new Date(moment(searchForm.checkIn).add(1, "day"))}
            onConfirm={(date) =>
              handleDateConfirm("checkOut", moment(date).format("YYYY-MM-DD"))
            }
            onCancel={() => hideDatePicker("checkOut")}
          />
        </View>
      </View>

      <View style={styles.guestContainer}>
        <View style={styles.guestTotalSection}>
          <Ionicons
            name="people"
            size={15}
            color={colors.primary}
            style={styles.icon}
          />
          <TextInput
            editable={false}
            style={styles.text}
            value={`${guest} Guest`}
          ></TextInput>
        </View>
        <View style={styles.arrowSection}>
          <TouchableOpacity onPress={() => decreaseGuestCount()}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => increaseGuestCount()}>
            <MaterialIcons
              name="keyboard-arrow-up"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>SEARCH</Text>
      </Pressable>
    </View>
  );
};

export default SearchHotel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    padding: 20,
    marginVertical: 15,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
  },
  twoRowWidth: {
    width: "48%",
  },
  datePickerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
  },
  guestContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  guestTotalSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.primary,
  },
  arrowSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginVertical: 5,
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
  },
});
