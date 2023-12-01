import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ICLogo } from "../../assets";
import { Card, Gap, TextCS } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../utils/colors";
import { addFavorite, unFavorite } from "../../redux/favoriteSlice";

const FavoriteScreen = () => {
  const { favorites } = useSelector((state) => state.favorite);

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
  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Gap height={30} />
        <ICLogo />
        <Gap height={30} />
        <ScrollView contentContainerStyle={styles.containerCart}>
          {favorites.length > 0 ? (
            favorites.map((favorite) => {
              return (
                <Card
                  type="favorite"
                  key={favorite.id}
                  name={favorite.name}
                  price={favorite.price}
                  city={favorite.address.city}
                  image={favorite.url}
                  favorite={favorites.some((item) => item.id === favorite.id)}
                  onPress={() => toggleFavorite(favorite)}
                  data={favorite}
                />
              );
            })
          ) : (
            <TextCS>Belum ada favorite</TextCS>
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white_2,
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
});
