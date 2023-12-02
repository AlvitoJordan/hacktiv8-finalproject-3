import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ButtonCS, Gap, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../../data/hotels.json";
import reviews from "../../data/review.json";
import CardFacilities from "../../components/molecules/Card/CardFacilities";
import CardCommentar from "../../components/molecules/Card/CardCommentar";
import { useSelector } from "react-redux";

const DetailHotelScreen = ({ navigation, route }) => {
  const [review, setReview] = useState([]);
  const { detailHotel, bookingInformation } = route.params;
  const { isLogin } = useSelector((state) => state.auth);

  const handleBooking = () => {
    if (isLogin) {
      navigation.navigate("BookingHotel", {
        detailHotel,
        bookingInformation,
      });
    } else {
      navigation.navigate("Login", {
        redirectScreen: "BookingHotel",
        params: {
          detailHotel,
          bookingInformation,
        },
      });
    }
  };

  useEffect(() => {
    if (detailHotel?.id) {
      const findHotel = hotels.find((hotel) => hotel.id === detailHotel.id);
      if (findHotel) {
        const filteredReview = reviews.filter(
          (review) => review.id === detailHotel.id
        );
        setReview(filteredReview);
      }
    }
  }, [detailHotel.id]);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const ratingStar = Array.from({ length: detailHotel.star }, (_, index) => (
    <Ionicons key={index} name="star" size={15} color={colors.secondary} />
  ));

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            source={{ uri: detailHotel.url }}
            style={styles.imageWrapper}
          >
            <View style={styles.detailContainer}>
              <View style={styles.detailContent}>
                <View style={styles.priceContainer}>
                  <TextCS style={styles.price}>
                    {formatPrice(detailHotel.price)}
                  </TextCS>
                  <TextCS style={styles.day}>Per Night</TextCS>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.aboutContainer}>
          <TextCS style={styles.sectionTitle}>INFORMATION</TextCS>
          <Gap height={10} />

          <View style={styles.info}>
            <TextCS style={styles.title}>{detailHotel.name}</TextCS>
            <View style={styles.rowIcon}>
              <View style={{ flexDirection: "row" }}>{ratingStar}</View>
              <Text style={styles.subtitle}>
                {parseFloat(detailHotel.rating).toFixed(1)}
              </Text>
            </View>
            <View style={styles.rowIcon}>
              <Ionicons name="location" size={20} color={colors.black} />
              <Text style={styles.subtitle}>
                {detailHotel.address?.fullAddress}
              </Text>
            </View>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.aboutContainer}>
          <TextCS style={styles.sectionTitle}>ABOUT</TextCS>
          <Gap height={10} />

          <TextCS style={styles.aboutDescription}>
            {detailHotel.description}
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
            {detailHotel.amenities &&
              detailHotel.amenities.map((amenity, index) => (
                <CardFacilities type={amenity} key={index} />
              ))}
          </ScrollView>
        </View>
        <Gap height={20} />
        <View style={styles.commentContainer}>
          <View>
            <TextCS style={styles.sectionTitle}>COMMENT</TextCS>
          </View>
          <ScrollView
            contentContainerStyle={{ padding: 5 }}
            vertical
            showsHorizontalScrollIndicator={false}
          >
            {review.map((value, index) =>
              value.review.map((e, i) => {
                return (
                  <CardCommentar
                    key={i}
                    name={e.username}
                    comment={e.comment}
                    date={e.date}
                    score={parseFloat(e.score).toFixed(1)}
                  />
                );
              })
            )}
          </ScrollView>
        </View>
        {/* <Gap height={50} /> */}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <ButtonCS
          title={"Book This Hotel"}
          style={styles.button}
          onPress={() => handleBooking()}
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
    width: "100%",
  },
  info: {
    width: "100%",
  },
  infoPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  detailContent: {
    paddingLeft: 15,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 3,
    width: "100%",
  },
  subtitle: {
    color: colors.black,
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
    width: 130,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "flex-end",
  },
  price: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold",
  },
  day: {
    color: colors.white,
    fontSize: 13,
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
