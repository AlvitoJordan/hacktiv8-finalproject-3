import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
