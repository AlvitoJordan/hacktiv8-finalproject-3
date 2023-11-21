import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ICLogo, ICOrang } from "../../assets";
import { Card, Gap } from "../../components";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <Gap height={30} />
        <ICLogo />
        <Gap height={30} />
        <View style={styles.wrapp_View}>
          <View style={styles.container_View}>
            <View style={styles.wrapp_img}>
              <ICOrang />
            </View>
            <View>
              <Text style={styles.text_infoFirst}>Rezal Nur Syaifudin</Text>
              <Text style={styles.text_infoSecc}>rezalnurscc@gmail.com</Text>
            </View>
          </View>
          <Gap height={5} />
          <View style={styles.wrapp_info}>
            <View style={styles.wrapp_row}>
              <Text> Bookings </Text>
              <Text style={styles.text_infoValue}> 225 </Text>
            </View>

            <View style={styles.wrapp_row}>
              <Text> Reviews </Text>
              <Text style={styles.text_infoValue}> 35 </Text>
            </View>

            <View style={styles.wrapp_row}>
              <Text> Favorites </Text>
              <Text style={styles.text_infoValue}> 55 </Text>
            </View>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.containerCart}>
          <Card type="Profil" />
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
    flexDirection: 'coll',
    paddingVertical: 20,
    gap: 15,
  },


})