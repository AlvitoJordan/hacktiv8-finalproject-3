import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DUHotelManila, ICBack, ICLocation, ICRate, ICRestourant, ICRoomService, ICSwimming, ICWifi } from "../../assets";
import { Card, Gap, TextCS } from "../../components";
import { colors } from "../../utils/colors";

const DetailHotelScreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={DUHotelManila} style={styles.imageWrapper}>
        <View style={styles.back}>
          <ICBack />
        </View>
        <View style={styles.detailContainer}>
          <View>
            <TextCS style={styles.title}>Hotel Word Love</TextCS>
            <Gap height={3} />
            <ICRate />
            <Gap height={10} />
            <View style={styles.location}>
              <ICLocation />
              <TextCS style={styles.textLocation}>Malang, Jawa Timur</TextCS>
            </View>
          </View>
          <View style={styles.containerPrice}>
            <TextCS style={styles.price}>$ 500</TextCS>
            <TextCS style={styles.day}>Per day</TextCS>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.aboutContainer}>
        <TextCS style={styles.aboutTitle}>ABOUT</TextCS>
        <Gap height={10} />
        <TextCS style={styles.aboutDescription}>Rencanakan trip Anda yang berikutnya, baca ulasan, serta dapatkan saran wisata dari komunitas kami tentang tempat menginap dan hal yang dapat dilakukan.</TextCS>
      </View>
      <View style={styles.facilitiesContainer}>
        <TextCS style={styles.facilitiesTitle}>FACILITIES</TextCS>
        <Gap height={10} />
        <ScrollView contentContainerStyle={{ padding: 5 }} horizontal showsHorizontalScrollIndicator={false}>
          <Card type={"facilities"} title="Wifi" icon={<ICWifi />} />
          <Card type={"facilities"} title="Swimming" icon={<ICSwimming />} />
          <Card type={"facilities"} title="Restourant" icon={<ICRestourant />} />
          <Card type={"facilities"} title="Room Service" icon={<ICRoomService />} />
          <Card type={"facilities"} title="Wifi" icon={<ICWifi />} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailHotelScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white_2,
    width: "100%",
  },
  imageWrapper: {
    width: "100%",
    height: 285,
    justifyContent: "space-between",
  },
  back: {
    paddingLeft: 10,
    paddingTop: 30,
  },
  detailContainer: {
    paddingLeft: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  infoContainer: {},
  title: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 30,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLocation: {
    color: colors.white,
    paddingLeft: 5,
  },
  containerPrice: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 100,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "600",
  },
  day: {
    color: colors.white,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: colors.white,
    elevation: 3,
  },
  aboutTitle: {
    color: colors.primary,
    fontWeight: "500",
    fontSize: 20,
  },
  aboutDescription: {
    fontWeight: "500",
    fontSize: 14,
  },
  facilitiesContainer: {
    marginTop: 20,
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: colors.white,
    elevation: 3,
  },
  facilitiesTitle: {
    color: colors.primary,
    fontWeight: "500",
    fontSize: 20,
  },
});
