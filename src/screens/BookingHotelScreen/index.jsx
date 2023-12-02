import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { ICBack } from "../../assets";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { showError, showSucces } from "../../utils/showMessage";
import { clearSearch } from "../../redux/searchSlice";
import { setLoading } from "../../redux/loadingSlice";
import { bookingHotel } from "../../redux/bookingSlice";
import { updateProfil } from "../../redux/authSlice";

const BookingHotelScreen = ({ navigation, route }) => {
  const { detailHotel } = route.params;
  const { account, isLogin } = useSelector((state) => state.auth);
  const { search } = useSelector((state) => state.search);

  const [userData, setUserData] = useState({
    firstName: account?.firstName,
    lastName: account?.lastName,
    phoneNumber: account?.phoneNumber,
    email: account?.email,
    gender: account?.gender,
  });

  useEffect(() => {
    setUserData({
      firstName: account?.firstName,
      lastName: account?.lastName,
      phoneNumber: account?.phoneNumber,
    });
  }, [account]);

  const startDate = new Date(search.checkIn);
  const endDate = new Date(search.checkOut);

  const timeDifference = endDate.getTime() - startDate.getTime();

  const daysDifference = timeDifference / (1000 * 3600 * 24);

  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Booking",
    });
  }, [navigation]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const totalPrice =
    detailHotel.price * parseInt(daysDifference) * search.guest;

  const handleChange = (type, text) => {
    setUserData((prev) => {
      if (type === "First Name") {
        return { ...prev, firstName: text };
      } else if (type === "Last Name") {
        return { ...prev, lastName: text };
      } else if (type === "Phone Number") {
        return { ...prev, phoneNumber: text };
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    dispatch(updateProfil());
  };

  const handleCheckin = (data) => {
    if (isLogin) {
      dispatch(setLoading(true));
      setTimeout(() => {
        showSucces("Anda telah berhasil memesan");
        dispatch(bookingHotel(data));
        dispatch(setLoading(false));
        dispatch(clearSearch());
        navigation.navigate("Profile");
      }, 2000);
    } else {
      showError("Silahkan login terlebih dahulu");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TextCS style={styles.sectionTitle}>CONTACT INFORMATIONS</TextCS>
              <Gap height={20} />
              <Text>First Name</Text>
              <View style={styles.information}>
                <TextInput
                  placeholder="First"
                  value={userData.firstName}
                  onChangeText={(text) => handleChange("First Name", text)}
                  onSubmitEditing={handleSubmit}
                ></TextInput>
              </View>
              <Gap height={10} />
              <Text>Last Name</Text>
              <View style={styles.information}>
                <TextInput
                  placeholder="LastName"
                  value={userData.lastName}
                  onChangeText={(text) => handleChange("Last Name", text)}
                  onSubmitEditing={handleSubmit}
                ></TextInput>
              </View>
              <Gap height={10} />
              <Text>Phone Number</Text>
              <View style={styles.informationTelephone}>
                <View style={styles.information}>
                  <TextInput
                    value="+62"
                    editable={false}
                    style={{
                      color: colors.black,
                    }}
                  ></TextInput>
                </View>
                <Gap width={10} />
                <View style={styles.information}>
                  <TextInput
                    placeholder="Phone Number"
                    value={userData.phoneNumber}
                    onChangeText={(text) => handleChange("Phone Number", text)}
                    onSubmitEditing={handleSubmit}
                    keyboardType="numeric"
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TextCS style={styles.sectionTitle}>PRICE SUMMARY</TextCS>
              <Gap height={10} />
              <Pressable onPress={() => navigation.navigate("EditDetail")}>
                <TextCS style={styles.informationTitle}>
                  {daysDifference} Days, 1 Room, {search.guest} Guest
                </TextCS>
              </Pressable>
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
