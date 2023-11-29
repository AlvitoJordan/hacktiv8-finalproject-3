import { Text, View, StyleSheet } from "react-native";
import { ICOrang } from "../../../assets";
import { colors } from "../../../utils/colors";

const WelcomeCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.greeting}>Hello, Welcome!</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.avatar}>
        <ICOrang width={50} height={50} />
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: "#810829",
  },
  name: {
    fontSize: 20,
    color: "#810829",
    fontWeight: "bold",
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
