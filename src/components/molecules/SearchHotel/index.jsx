import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { ButtonCS, Gap, InputCS, TextCS } from "../../atoms";
import { ICArrowBottom, ICArrowTop, ICCalender, ICGuest, ICSearch } from "../../../assets";

const SearchHotel = () => {
  return (
    <View style={styles.container}>
      <InputCS typeInput={"WithIcon"} style={styles.input} icon={<ICSearch />} placeholder={"Where Do You Want Go ?"} styleInput={styles.inputStyle} placeholderColor={colors.primary} />
      <Gap height={20} />
      <View style={styles.calendarContainer}>
        <View style={styles.calendarSection}>
          <ICCalender />
          <TextCS style={styles.textCheckDate}>Check-in Date</TextCS>
        </View>
        <View style={styles.calendarSection}>
          <ICCalender />
          <TextCS style={styles.textCheckDate}>Check-out Date</TextCS>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.guestContainer}>
        <View style={styles.guestTotalSection}>
          <ICGuest />
          <TextCS style={styles.textGuest}>0 Guest</TextCS>
        </View>
        <View style={styles.arrowSection}>
          <TouchableOpacity>
            <ICArrowBottom />
          </TouchableOpacity>
          <TouchableOpacity>
            <ICArrowTop />
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
    borderRadius: 100,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  guestTotalSection: {
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
});
