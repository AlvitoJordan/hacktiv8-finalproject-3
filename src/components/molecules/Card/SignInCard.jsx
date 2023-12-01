import { Pressable, Text, View, StyleSheet } from "react-native";
import { ILLSignIn } from "../../../assets";
import { colors } from "../../../utils/colors";

const SignInCard = ({ onPress }) => {
  return (
    <View style={styles.signInContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Get Your Dream Getaway</Text>
        <Text style={styles.name}>
          Log in to manage reservations, explore exclusive offers.
        </Text>
        <Pressable style={styles.buttons} onPress={onPress}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Pressable>
      </View>
      <ILLSignIn />
    </View>
  );
};

export default SignInCard;

const styles = StyleSheet.create({
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.gray,
    marginVertical: 15,
  },
  leftContainer: {
    flex: 1,
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    color: "#810829",
  },
  title: {
    fontSize: 20,
    color: "#810829",
    fontWeight: "bold",
  },
  buttons: {
    backgroundColor: colors.secondary,
    width: "50%",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
