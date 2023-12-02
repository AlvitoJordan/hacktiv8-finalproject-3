import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { Card, Gap } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, unFavorite } from "../../redux/favoriteSlice";
import { showError } from "../../utils/showMessage";
import { colors } from "../../utils/colors";
import LoginRedirect from "../../components/molecules/LoginRedirect";

const ProfileScreen = ({ navigation }) => {
  const { isLogin, account } = useSelector((state) => state.auth);
  const { favorites } = useSelector((state) => state.favorite);
  const { search } = useSelector((state) => state.search);
  const { booked } = useSelector((state) => state.booked);
  const { image } = account;

  const dispatch = useDispatch();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };
  const toggleFavorite = (data) => {
    try {
      const isAlreadyFavorite = favorites.some((item) => item.id === data.id);
      if (isLogin) {
        if (isAlreadyFavorite) {
          dispatch(unFavorite(data));
        } else {
          dispatch(addFavorite(data));
        }
      } else {
        showError("Silahkan login terlebih dahulu");
      }
    } catch (error) {
      showError(error);
    }
  };
  const dummyProfile =
    "https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png";
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Booking History</Text>
          {isLogin ? (
            <>
              <View style={styles.wrapp_View}>
                <View style={styles.container_View}>
                  <Image
                    source={{ uri: image || dummyProfile }}
                    style={styles.wrapp_img}
                  />

                  <View>
                    <Text style={styles.text_infoFirst}>
                      {account.firstName} {account.lastName}
                    </Text>
                    <Text style={styles.text_infoSecc}>{account.email}</Text>
                  </View>
                </View>
                <Gap height={5} />
                <View style={styles.wrapp_info}>
                  <View style={styles.wrapp_row}>
                    <Text> Bookings </Text>
                    <Text style={styles.text_infoValue}>{booked.length}</Text>
                  </View>
                  <View style={styles.wrapp_row}>
                    <Text> Favorites </Text>
                    <Text style={styles.text_infoValue}>
                      {favorites.length || 0}
                    </Text>
                  </View>
                </View>
              </View>
              <Gap height={20} />
              {booked.map((hotel) => (
                <Card
                  type="favorite"
                  key={hotel.id}
                  name={hotel.name}
                  price={formatPrice(hotel.price)}
                  image={hotel.url}
                  city={hotel.address.city}
                  onFavorite={() => toggleFavorite(hotel)}
                  onPress={() =>
                    navigation.navigate("Detail Hotel", {
                      detailHotel: hotel,
                      bookingInformation: search,
                    })
                  }
                  favorite={favorites.some((item) => item.id === hotel.id)}
                  rate={hotel.star}
                  score={hotel.rating}
                />
              ))}
            </>
          ) : (
            <LoginRedirect
              name={"booking history"}
              content={
                "You can create and view booking history once you've logged in"
              }
              onPress={() => navigation.navigate("Login")}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.white_2,
  },
  container: {
    padding: 20,
  },

  wrapp_View: {
    backgroundColor: "#D1114D",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "coll",
    paddingVertical: 20,
    gap: 10,
  },

  container_View: {
    backgroundColor: "#D1114D",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 25,
    flexDirection: "row",
    gap: 20,
  },
  wrapp_img: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  wrapp_info: {
    backgroundColor: "#ffffff",
    width: "90%",
    marginHorizontal: 25,
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  wrapp_row: {
    width: "default",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "coll",
    gap: 5,
    paddingVertical: 10,
  },
  // border_info: {
  //   height: "90%",
  //   width: "5px",
  //   backgroundColor: "#DEDEDE",
  // },
  text_infoFirst: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  text_infoSecc: {
    color: colors.white,
  },
  text_infoValue: {
    color: "#D1114D",
  },
  // =======================================

  // containerCart: {
  //   width: "100%",
  //   alignItems: "center",
  //   flexDirection: "coll",
  //   paddingVertical: 20,
  // },
  title: {
    color: colors.darkRed,
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 20,
  },
});
