import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  DUHotelManila,
  ICBack,
  ICLocation,
  ICRate,
  ICRestourant,
  ICRoomService,
  ICSwimming,
  ICWifi,
} from "../../assets";
import { ButtonCS, Card, Gap, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import hotels from "../../data/hotels.json";

const DetailHotelScreen = ({ navigation, route }) => {
  const [detailHotel, setDetailHotel] = useState({});

  useEffect(() => {
    if (route.params?.id) {
      const findHotel = hotels.find((hotel) => hotel.id === route.params?.id);
      if (findHotel) {
        setDetailHotel(findHotel);
      }
    }
  }, [route.params?.id]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <MaterialIcons
            name="favorite-border"
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <ImageBackground source={DUHotelManila} style={styles.imageWrapper}>
            <View style={styles.detailContainer}>
              <View style={styles.detailContent}>
                <View>
                  <TextCS style={styles.title}>{detailHotel.name}</TextCS>
                  <View style={styles.rowIcon}>
                    <Ionicons name="star" size={20} color={colors.secondary} />
                    <Text style={styles.subtitle}>3.4</Text>
                  </View>
                  <View style={styles.rowIcon}>
                    <Ionicons name="location" size={20} color={colors.white} />
                    <Text style={styles.subtitle}>Malang, Jawa Timur</Text>
                  </View>
                </View>
                <View style={styles.priceContainer}>
                  <TextCS style={styles.price}>$ 500</TextCS>
                  <TextCS style={styles.day}>Per Night</TextCS>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.aboutContainer}>
          <TextCS style={styles.sectionTitle}>ABOUT</TextCS>
          <Gap height={10} />
          <TextCS style={styles.aboutDescription}>
            Rencanakan trip Anda yang berikutnya, baca ulasan, serta dapatkan
            saran wisata dari komunitas kami tentang tempat menginap dan hal
            yang dapat dilakukan.
          </TextCS>
        </View>
        <View style={styles.facilitiesContainer}>
          <TextCS style={styles.sectionTitle}>FACILITIES</TextCS>
          <Gap height={10} />
          <ScrollView
            contentContainerStyle={{ padding: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card type={"facilities"} title="Wifi" icon={<ICWifi />} />
            <Card type={"facilities"} title="Swimming" icon={<ICSwimming />} />
            <Card
              type={"facilities"}
              title="Restourant"
              icon={<ICRestourant />}
            />
            <Card
              type={"facilities"}
              title="Room Service"
              icon={<ICRoomService />}
            />
            <Card type={"facilities"} title="Wifi" icon={<ICWifi />} />
          </ScrollView>
        </View>
        <Gap height={20} />
        <View style={styles.commentContainer}>
          <View style={styles.titleContainer}>
            <TextCS style={styles.sectionTitle}>COMMENT</TextCS>
          </View>
          <ScrollView
            contentContainerStyle={{ padding: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card type={"commentar"} />
            <Card type={"commentar"} />
            <Card type={"commentar"} />
            <Card type={"commentar"} />
          </ScrollView>
        </View>
        {/* <Gap height={50} /> */}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonCS
          title={"Book This Hotel"}
          style={styles.button}
          onPress={() => navigation.navigate("BookingHotel")}
        />
      </View>
    </View>
  );
};

export default DetailHotelScreen;

const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    height: 300,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  detailContent: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 3,
  },
  subtitle: {
    color: colors.white,
    fontSize: 15,
  },
  rowIcon: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 3,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLocation: {
    color: colors.white,
    paddingLeft: 5,
  },
  priceContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 100,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
  day: {
    color: colors.white,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: colors.white,
    elevation: 1,
  },
  sectionTitle: {
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
    elevation: 1,
  },
  commentContainer: {
    backgroundColor: colors.white,
    elevation: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    marginBottom: 75,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  buttonContainer: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    padding: 10,
  },
});
