import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { ICBack } from "../../assets";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { showError, showSucces } from "../../utils/showMessage";
import { setLoading } from "../../redux/loadingSlice";
import { bookingHotel } from "../../redux/bookingSlice";

const BookingHotelScreen = ({ navigation, route }) => {
  const { detailHotel, bookingInformation } = route.params;
  const { checkIn, checkOut, guest } = bookingInformation;
  const { account, isLogin } = useSelector((state) => state.auth);
  const fullName = account?.firstName
    ? account.firstName + " " + (account.lastName ?? "Guest")
    : "Guest";
  const { booked } = useSelector((state) => state.booked);
  console.log(booked);
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const timeDifference = endDate.getTime() - startDate.getTime();

  const daysDifference = timeDifference / (1000 * 3600 * 24);

  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const totalPrice = detailHotel.price * parseInt(daysDifference) * guest;

  const handleCheckin = (data) => {
    if (isLogin) {
      dispatch(setLoading(true));
      setTimeout(() => {
        showSucces("Anda telah berhasil memesan");
        dispatch(bookingHotel(data));
        dispatch(setLoading(false));
      }, 2000);
    } else {
      showError("Silahkan login terlebih dahulu");
    }
  };

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
                <TextCS style={styles.informationTitle}>
                  {fullName || "Guest"}
                </TextCS>
              </View>
              <Gap height={10} />
              <View style={styles.information}>
                <TextCS style={styles.informationTitle}>
                  {account.email || "Not login yet"}
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
                {daysDifference} Days, 1 Room, {guest} Guest
              </TextCS>
              <Gap height={20} />
              <List label={"Total"} title={formatPrice(totalPrice)} />
              <Gap height={10} />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <ButtonCS
            title={"Check In"}
            onPress={() => handleCheckin(detailHotel)}
          />
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
