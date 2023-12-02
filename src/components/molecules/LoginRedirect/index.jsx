import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/colors";

const LoginRedirect = ({ name, content, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in to view your {name}</Text>
      <Text style={styles.subtitle}>{content}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </View>
  );
};
export default LoginRedirect;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkRed,
    paddingVertical: 5,
  },
  subtitle: {
    fontSize: 15,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 20,
  },
});
