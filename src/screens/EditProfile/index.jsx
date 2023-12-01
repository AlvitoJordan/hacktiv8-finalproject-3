import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ICLogo } from "../../assets/";
import { ButtonCS, Gap, List, TextCS } from "../../components";
import { colors } from "../../utils/colors";
import { useSelector, useDispatch } from "react-redux";
import { updateProfil } from "../../redux/authSlice";
import { useNavigation } from "@react-navigation/native";
import { setLoading } from "../../redux/loadingSlice";
import { showError } from "../../utils/showMessage";



const EditProfile = () => {
    const navigation = useNavigation();
    const { account } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        gender: account.gender,
        password: account.password,
        id: null
    });

    const options = [
        { key: 'Pria', label: 'Pria' },
        { key: 'Wanita', label: 'Wanita' },
    ];

    const RadioButton = ({ options, value = account.gender, onSelect, selectedOption }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                {options.map((option) => (
                    <View key={option.key} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity
                            onPress={() => onSelect(option.key)}
                            style={{
                                width: 20, height: 20, borderRadius: 12, borderWidth: 2,
                                borderColor: value === option.key ? colors.secondary : 'gray',
                                backgroundColor: selectedOption === option.key ? colors.secondary : 'white',
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
                }, 2000);
            }
        } catch (error) {
            showError(error);
        }
    }

    // console.log(value)
    // console.log(account)

    return (
        <View style={styles.screen}>
            <View style={styles.logoContainer}>
                <ICLogo />
            </View>
            <Gap height={30} />
            <View style={styles.cardContainer}>
                <TextCS style={styles.sectionTitle}>Edit Profile</TextCS>
                <Gap height={20} />
                <List type="TextInput" title={value.firstName} label={"First Name"} value={value.firstName} onChange={(values) => setValue({ ...value, firstName: values })} />
                <List type="TextInput" title={value.lastName} label={"Last Name"} value={value.lastName} onChange={(values) => setValue({ ...value, lastName: values })} />
                <List type="TextInput" title={value.email} label={"Email"} value={value.email} onChange={(values) => setValue({ ...value, email: values })} />
                <View style={styles.checkBoxStyle}>
                    <Text style={{ color: colors.black }}>Gender</Text>
                    <RadioButton options={options} selectedOption={value.gender} value={value.gender} onSelect={(values) => setValue({ ...value, gender: values })} />
                </View>
                <Gap height={10} />
                <ButtonCS title="SUBMIT" style={styles.btn_style} onPress={handleUpdateProfil} />
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
    cardContainer: { width: "100%", backgroundColor: colors.white, elevation: 3, padding: 20, borderRadius: 20, },
    sectionTitle: {
        color: colors.primary,
        fontWeight: "600",
        fontSize: 20,
    },
    btn_style: {
        width: 140,
        height: 40,
        padding: 6,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: colors.primary,
        borderRadius: 8,
    },
    checkBoxStyle: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
});
