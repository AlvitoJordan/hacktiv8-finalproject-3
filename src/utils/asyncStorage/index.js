import AsyncStorage from '@react-native-async-storage/async-storage';
import {showError} from '../showMessage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showError(error.message);
  }
};
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) return JSON.parse(value);
  } catch (error) {
    showError(error.message);
    return null;
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    showError(error.message);
  }
};