import AsyncStorage from '@react-native-async-storage/async-storage';

// Simulate registration action
export const register = (name, email, password, role) => async (dispatch) => {
  try {
    const token = `${email}-token`; // Simulated token
    const user = { name, email, password, role };

    // Save user data to AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('token', token);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: { token, role },
    });
  } catch (error) {
    console.error(error);
  }
};

// Simulate login action
export const login = (email, password) => async (dispatch) => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);

    // Simulate token and check credentials
    if (user && user.email === email && user.password === password) {
      const token = `${email}-token`; // Simulated token
      await AsyncStorage.setItem('token', token);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { token, role: user.role },
      });
    } else {
      console.error('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
  }
};

// Logout action
export const logout = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error(error);
  }
};
