import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AppLogo } from "../../assets/";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { useSelector, useDispatch } from "react-redux";
import { updateProfil } from "../../redux/authSlice";
import { useNavigation } from "@react-navigation/native";
import { setLoading } from "../../redux/loadingSlice";
import { showError } from "../../utils/showMessage";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
  const navigation = useNavigation();
  const { account } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const dummyProfile =
    "https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png";
  const { image } = account;

  const [value, setValue] = useState({
    firstName: account.firstName,
    lastName: account.lastName,
    email: account.email,
    gender: account.gender,
    password: account.password,
    phoneNumber: account.phoneNumber,
    id: null,
    image: image,
  });
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setValue({ ...value, image: result.assets[0].uri });
    }
  };

  const options = [
    { key: "Pria", label: "Pria" },
    { key: "Wanita", label: "Wanita" },
  ];

  const RadioButton = ({
    options,
    value = account.gender,
    onSelect,
    selectedOption,
  }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        {options.map((option) => (
          <View
            key={option.key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => onSelect(option.key)}
              style={{
                width: 20,
                height: 20,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: value === option.key ? colors.secondary : "gray",
                backgroundColor:
                  selectedOption === option.key ? colors.secondary : "white",
              }}
            />
            <Text style={{ marginLeft: 10 }}>{option.label}</Text>
          </View>
        ))}
      </View>
    );
  };

  const handleUpdateProfil = () => {
    try {
      dispatch(setLoading(true));
      if (value) {
        setTimeout(() => {
          dispatch(setLoading(false));
          dispatch(updateProfil(value));
          navigation.replace("MainApp");
        }, 1000);
      }
    } catch (error) {
      showError(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <AppLogo />
      </View>
      <Gap height={30} />
      <View style={styles.cardContainer}>
        <TextCS style={styles.sectionTitle}>Edit Profile</TextCS>
        <Gap height={20} />
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.imageRounded}>
            <Image
              source={{ uri: value.image || dummyProfile }}
              style={styles.wrapp_img}
            />
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <List
          type="TextInput"
          title={value.firstName}
          label={"First Name"}
          value={value.firstName}
          onChange={(values) => setValue({ ...value, firstName: values })}
        />
        <List
          type="TextInput"
          title={value.lastName}
          label={"Last Name"}
          value={value.lastName}
          onChange={(values) => setValue({ ...value, lastName: values })}
        />
        <List
          type="TextInput"
          title={value.email}
          label={"Email"}
          value={value.email}
          onChange={(values) => setValue({ ...value, email: values })}
        />
        <List
          type="TextInput"
          title={value.phoneNumber}
          label={"Phone Number"}
          value={value.phoneNumber}
          keyInput="numeric"
          onChange={(values) => setValue({ ...value, phoneNumber: values })}
        />
        <View style={styles.checkBoxStyle}>
          <Text style={{ color: colors.black }}>Gender</Text>
          <RadioButton
            options={options}
            selectedOption={value.gender}
            value={value.gender}
            onSelect={(values) => setValue({ ...value, gender: values })}
          />
        </View>
        <Gap height={10} />
        <ButtonCS
          title="SUBMIT"
          style={styles.btn_style}
          onPress={handleUpdateProfil}
        />
      </View>
      <Gap height={30} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white_2,
    alignItems: "center",
    paddingTop: 30,
    padding: 20,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: colors.white,
    elevation: 3,
    padding: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 20,
  },
  btn_style: {
    width: 140,
    height: 40,
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  checkBoxStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapp_img: {
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageRounded: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.gray,
  },
});
