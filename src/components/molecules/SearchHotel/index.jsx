import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCheckIn,
  setCheckOut,
  guestDecrement,
  guestIncrement,
  searchPressed,
} from "../../../redux/searchSlice";

const SearchHotel = () => {
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.selectedItem);
  const checkIn = useSelector((state) => state.search.checkIn);
  const checkOut = useSelector((state) => state.search.checkOut);
  const guest = useSelector((state) => state.search.guest);

  const increaseGuestCount = () => {
    dispatch(guestIncrement());
  };

  const decreaseGuestCount = () => {
    dispatch(guestDecrement());
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
      dispatch(setCheckIn(date));
    } else {
      hideDatePicker(type);
      dispatch(setCheckOut(date));
    }
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
          value={search}
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
              value={checkIn}
            ></TextInput>
          </Pressable>
          <DateTimePickerModal
            isVisible={showCheckInDatePicker}
            display="default"
            mode="date"
            date={new Date(checkIn)}
            minimumDate={new Date()}
            onConfirm={(date) =>
              handleDateConfirm("checkIn", moment(date).format("YYYY-MM-DD"))
            }
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
              value={checkOut}
            ></TextInput>
          </Pressable>
          <DateTimePickerModal
            isVisible={showCheckOutDatePicker}
            display="default"
            mode="date"
            date={new Date(checkOut)}
            minimumDate={new Date(moment(checkIn).add(1, "day"))}
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
          <TouchableOpacity onPress={decreaseGuestCount}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={increaseGuestCount}>
            <MaterialIcons
              name="keyboard-arrow-up"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(searchPressed())}
      >
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
