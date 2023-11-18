import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { ICRate } from "../../../assets";
import { colors } from "../../../utils/colors";

const CardCommentar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.roundedProfile} />
        <View>
          <TextCS style={styles.nameUser}>Syaeful Annas</TextCS>
          <ICRate />
        </View>
      </View>
      <Gap height={10} />
      <Text style={styles.comment}>Rencanakan trip Anda yang berikutnya, baca ulasan, serta dapatkan saran wisata dari komunitas.</Text>
    </View>
  );
};

export default CardCommentar;

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 130,
    backgroundColor: colors.white,
    elevation: 3,
    borderRadius: 20,
    paddingLeft: 20,
    paddingVertical: 20,
    paddingRight: 9,
    marginRight: 20,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  roundedProfile: {
    width: 30,
    height: 30,
    borderRadius: 200,
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginRight: 5,
  },
  nameUser: {
    fontWeight: "600",
    fontSize: 17,
  },
  comment: {
    fontWeight: "500",
  },
});
