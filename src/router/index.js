import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BookingHotelScreen,
  DetailHotelScreen,
  FavoriteScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SettingScreen,
  EditProfile,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator, LoadingCS } from "../components";
import SearchScreen from "../screens/SearchScreen";
import React from "react";
import CityResult from "../screens/SearchResultScreen/CityResult";
import { useSelector } from "react-redux";
import PopularResult from "../screens/SearchResultScreen/PopularResult";
import SearchResult from "../screens/SearchResultScreen/SearchResult";
import { colors } from "../utils/colors";
import EditDetailScreen from "../screens/EditDetail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export const Router = () => {
  const isLoading = useSelector((state) => state.toggle.isLoading);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail Hotel"
          component={DetailHotelScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        />
        <Stack.Screen
          name="BookingHotel"
          component={BookingHotelScreen}
          options={{}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="City Result" component={CityResult} options={{}} />
        <Stack.Screen
          name="Popular Result"
          component={PopularResult}
          options={{}}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{
            headerShown: true,
            headerTransparent: false,
            headerTintColor: colors.black,
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="Search Result"
          component={SearchResult}
          options={{}}
        />
        <Stack.Screen
          name="EditDetail"
          component={EditDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {isLoading && <LoadingCS />}
    </NavigationContainer>
  );
};
