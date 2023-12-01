import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { ICBack } from "../../assets";
import { colors } from "../../utils/colors";

const BookingHotelScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ICBack />
          </TouchableOpacity>
          <TextCS style={styles.headerTitle}>Book Now</TextCS>
        </View>
      </View>
      <Gap height={30} />
      <View style={styles.wrapper}>
        <View>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TextCS style={styles.sectionTitle}>CONTACT INFORMATIONS</TextCS>
              <Gap height={20} />
              <View style={styles.information}>
                <TextCS style={styles.informationTitle}>Syaeful Annas</TextCS>
              </View>
              <Gap height={10} />
              <View style={styles.information}>
                <TextCS style={styles.informationTitle}>
                  syaefulannas33@gmail.com
                </TextCS>
              </View>
              <Gap height={10} />
              <View style={styles.informationTelephone}>
                <View style={styles.information}>
                  <TextCS style={styles.informationTitle}>+62</TextCS>
                </View>
                <Gap width={10} />
                <View style={styles.information}>
                  <TextCS style={styles.informationTitle}>83827618820</TextCS>
                </View>
              </View>
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TextCS style={styles.sectionTitle}>PRICE SUMMARY</TextCS>
              <Gap height={10} />
              <TextCS style={styles.informationTitle}>
                3 Days, 1 Room, 2 Guest
              </TextCS>
              <Gap height={20} />
              <List label={"Total"} title={"$ 500"} />
              <Gap height={10} />
              <List label={"Payable Now"} title={"$ 1500"} />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <ButtonCS title={"Continue"} />
        </View>
      </View>
    </View>
  );
};

export default BookingHotelScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white_2,
    marginTop: 30,
  },
  wrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: colors.primary,
    padding: 10,
  },
  headerSection: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    padding: 20,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: colors.white,
    elevation: 3,
    padding: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 20,
  },
  information: {
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  informationTitle: {
    fontWeight: "600",
  },
  informationTelephone: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
