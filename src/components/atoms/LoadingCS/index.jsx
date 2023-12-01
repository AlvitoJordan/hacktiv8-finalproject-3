import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Easing,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import TextCS from "../TextCS";
import { colors } from "../../../utils/colors";

const LoadingCS = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </Animated.View>
      <TextCS style={styles.text}>Loading ...</TextCS>
    </View>
  );
};

export default LoadingCS;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
  },
});
