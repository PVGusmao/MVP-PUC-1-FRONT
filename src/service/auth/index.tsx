export const setToken = (value: string) => {
  try {
    localStorage.setItem('@token_mvp', value);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('@token_mvp');
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  return localStorage.getItem('@token_mvp');
};