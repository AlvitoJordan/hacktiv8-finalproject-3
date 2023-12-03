import { Text, View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const WelcomeCard = ({ name }) => {
  const dummyProfile =
    "https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png";
  const { account } = useSelector((state) => state.auth);
  const image = account ? account.image : null;

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.greeting}>Hello, Welcome!</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: image || dummyProfile,
          }}
          style={styles.avatar}
        />
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
