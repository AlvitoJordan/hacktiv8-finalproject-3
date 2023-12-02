import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Gap, TextCS } from "../../atoms";
import { colors } from "../../../utils/colors";
import { ICOrang } from "../../../assets";

const CardCommentar = ({ name, date, comment, score }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.roundedProfile}>
          <ICOrang width={40} height={40} />
        </View>
        <View style={styles.content}>
          <TextCS style={styles.nameUser}>{name}</TextCS>
          <Text style={styles.date}>{date}</Text>
          <Gap height={10} />
          <Text style={styles.comment}>{comment}</Text>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  );
};

export default CardCommentar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  roundedProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  content: { flex: 1 },
  nameUser: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: colors.darkRed,
  },
  scoreContainer: {
    position: "absolute",
    top: 20,
    right: 10,
    backgroundColor: colors.primary,
    padding: 5,
    width: 45,
    alignItems: "center",
    borderRadius: 5,
  },
  scoreText: {
    color: "white",
    fontWeight: "bold",
  },
});
