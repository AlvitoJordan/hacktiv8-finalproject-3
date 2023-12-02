import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { Card } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../utils/colors";
import { addFavorite, unFavorite } from "../../redux/favoriteSlice";
import LoginRedirect from "../../components/molecules/LoginRedirect";

const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useSelector((state) => state.favorite);
  const { search } = useSelector((state) => state.search);
  const { isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const toggleFavorite = (data) => {
    try {
      const isAlreadyFavorite = favorites.some((item) => item.id === data.id);
      if (isAlreadyFavorite) {
        dispatch(unFavorite(data));
      } else {
        dispatch(addFavorite(data));
      }
    } catch (error) {
      showError(error);
    }
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Wishlists</Text>
          {isLogin ? (
            favorites.length > 0 ? (
              favorites.map((favorite) => {
                return (
                  <Card
                    type="favorite"
                    key={favorite.id}
                    name={favorite.name}
                    price={formatPrice(favorite.price)}
                    city={favorite.address.city}
                    image={favorite.url}
                    favorite={favorites.some((item) => item.id === favorite.id)}
                    onPress={() =>
                      navigation.navigate("Detail Hotel", {
                        detailHotel: favorite,
                        bookingInformation: search,
                      })
                    }
                    onFavorite={() => toggleFavorite(favorite)}
                    rate={favorite.star}
                    score={favorite.rating}
                  />
                );
              })
            ) : (
              <Text>
                Oops, your wishlist is Empty! Explore to find what you like
              </Text>
            )
          ) : (
            <LoginRedirect
              name={"wishlist"}
              content={
                "You can create, view, or edit wishlist once you've logged in"
              }
              onPress={() => navigation.navigate("Login")}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

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
    borderRadius: 11,
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
  containerCart: {
    width: "100%",
    alignItems: "center",
    flexDirection: "coll",
    paddingVertical: 20,
    gap: 10,
  },
  title: {
    color: colors.darkRed,
    fontWeight: "bold",
    fontSize: 28,
    paddingBottom: 20,
  },
});
