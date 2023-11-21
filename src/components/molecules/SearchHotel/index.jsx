import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils/colors";
import { ButtonCS, Gap, InputCS, TextCS } from "../../atoms";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  ICArrowBottom,
  ICArrowTop,
  ICCalender,
  ICGuest,
  ICSearch,
} from "../../../assets";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SearchHotel = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const increaseGuestCount = () => {
    if (guestCount < 7) {
      setGuestCount(guestCount + 1);
    }
  };

  const decreaseGuestCount = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Mendapatkan tanggal besok

  const formatDate = (dateToFormat) => {
    return dateToFormat.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };
  return (
    <View style={styles.container}>
      {/* <InputCS
        typeInput={"WithIcon"}
        style={styles.input}
        icon={<ICSearch />}
        placeholder={"Where Do You Want Go ?"}
        styleInput={styles.inputStyle}
        placeholderColor={colors.primary}
      /> */}
      <Pressable style={styles.customButton}>
        <Ionicons
          name="search"
          size={15}
          color={colors.primary}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Where Do You Want Go ?</Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          margin: 10,
        }}
      >
        <View
          style={{
            width: "48%",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              borderRadius: 5,
              padding: 10,
            }}
            onPress={showDatePicker}
          >
            <Ionicons
              name="calendar"
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: colors.primary }}>{formatDate(today)}</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={date}
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            style={{ flex: 1 }}
          />
        </View>
        <View
          style={{
            width: "48%",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              borderRadius: 5,
              padding: 10,
            }}
            onPress={() => {
              setDate(tomorrow);
              showDatePicker();
            }}
          >
            <Ionicons
              name="calendar"
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: colors.primary }}>
              {formatDate(tomorrow)}
            </Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={date}
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            style={{ flex: 1 }}
          />
        </View>
      </View>
      {/* <View style={styles.calendarContainer}>
        <View style={styles.calendarSection}>
          <ICCalender />
          <TextCS style={styles.textCheckDate}>Check-in Date</TextCS>
        </View>
        <View style={styles.calendarSection}>
          <ICCalender />
          <TextCS style={styles.textCheckDate}>Check-out Date</TextCS>
        </View>
      </View> */}
      {/* <Gap height={20} /> */}
      <View style={styles.guestContainer}>
        <View style={styles.guestTotalSection}>
          <FontAwesome name="user" size={20} color={colors.primary} />
          <TextCS style={styles.textGuest}>{guestCount} Guest</TextCS>
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
      <Gap height={20} />
      <ButtonCS title={"Search"} />
    </View>
  );
};

export default SearchHotel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  input: {
    width: "100%",
    borderWidth: 0,
    borderRadius: 100,
    height: 40,
  },
  inputStyle: {
    fontSize: 15,
    borderLeftColor: colors.primary,
    borderLeftWidth: 1,
    color: colors.primary,
  },
  calendarContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calendarSection: {
    backgroundColor: colors.white,
    width: "48%",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  textCheckDate: {
    color: colors.primary,
    paddingLeft: 4,
  },
  guestContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  guestTotalSection: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textGuest: {
    color: colors.primary,
    paddingLeft: 10,
  },
  arrowSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 4,
  },
  customButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 5,
    width: "100%",
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
  },
  datepicker: {
    color: colors.primary,
  },
});
