import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICLogo } from "../../assets";
import { Card, Gap } from '../../components'

const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <Gap height={30} />
        <ICLogo />
        <Gap height={30} />
        <View style={styles.containerCart}>
          <Card type="favorite" />
        </View>
      </ ScrollView >
    </View>
  );
};

export default FavoriteScreen;

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
    flexDirection: 'coll',
    paddingVertical: 20,
    gap: 10,
  },

  container_View: {
    backgroundColor: "#D1114D",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 25,
    flexDirection: 'row',
    gap: 20,

  },
  wrapp_img: {
    borderRadius: 11,
    overflow: "hidden"
  },

  wrapp_info: {
    backgroundColor: "#ffffff",
    width: "90%",
    marginHorizontal: 25,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: "space-evenly",

  },
  wrapp_row: {
    width: "default",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: 'coll',
    gap: 5,
    paddingVertical: 10,
  },
  containerCart: {

    width: "100%",
    alignItems: "center",
    flexDirection: 'coll',
    paddingVertical: 20,
    gap: 10,
  },

})