import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('@token_mvp', value);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('@token_mvp');
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem('@token_mvp');
};