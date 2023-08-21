import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('TokenCDF', value);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('TokenCDF');
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem('TokenCDF');
};