import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ICLogo } from "../../assets";
import { Card, Gap } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, unFavorite } from "../../redux/favoriteSlice";
import { showError } from "../../utils/showMessage";

const ProfileScreen = ({ navigation }) => {
  const { account } = useSelector((state) => state.auth);
  const { favorites } = useSelector((state) => state.favorite);
  const { search } = useSelector((state) => state.search);
  const { booked } = useSelector((state) => state.booked);
  const { isLogin } = useSelector((state) => state.auth);
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
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Gap height={30} />
        <ICLogo />
        <Gap height={30} />
        <View style={styles.wrapp_View}>
          <View style={styles.container_View}>
            <Image
              source={{ uri: image || dummyProfile }}
              style={styles.wrapp_img}
            />

            <View>
              <Text style={styles.text_infoFirst}>
                {account.firstName || "Guest"} {account.lastName || "Account"}
              </Text>
              <Text style={styles.text_infoSecc}>
                {account.email || "You are not loggin yet"}
              </Text>
            </View>
          </View>
          <Gap height={5} />
          <View style={styles.wrapp_info}>
            <View style={styles.wrapp_row}>
              <Text> Bookings </Text>
              <Text style={styles.text_infoValue}>{booked.length}</Text>
            </View>

            <View style={styles.wrapp_row}>
              <Text> Reviews </Text>
              <Text style={styles.text_infoValue}>0</Text>
            </View>

            <View style={styles.wrapp_row}>
              <Text> Favorites </Text>
              <Text style={styles.text_infoValue}>{favorites.length || 0}</Text>
            </View>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.containerCart}>
          {booked.map((hotel) => (
            <Card
              type="favorite"
              key={hotel.id}
              name={hotel.name}
              price={formatPrice(hotel.price)}
              image={hotel.url}
              city={hotel.address.city}
              onFavorite={() => toggleFavorite(hotel)}
              data={hotel}
              onPress={() =>
                navigation.navigate("Detail Hotel", {
                  detailHotel: hotel,
                  bookingInformation: search,
                })
              }
              favorite={favorites.some((item) => item.id === hotel.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f9f9f9",
    alignItems: "center",
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
  border_info: {
    height: "90%",
    width: "5px",
    backgroundColor: "#DEDEDE",
  },
  text_infoFirst: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  text_infoSecc: {
    color: "#ffffff",
  },
  text_infoValue: {
    color: "#D1114D",
  },
  // =======================================

  containerCart: {
    width: "100%",
    alignItems: "center",
    flexDirection: "coll",
    paddingVertical: 20,
    gap: 10,
  },
});
