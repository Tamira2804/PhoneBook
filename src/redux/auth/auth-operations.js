import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// {
//   "name": "Liam Nisson",
//   "email": "lnisson@mail.com",
//   "password": "zxcvbnm654"
// }

// {
//   "name": "Nicolas Cage",
//   "email": "ncage@mail.com",
//   "password": "asdfghj789"
// }

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.error('Error by register:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 * Після вдалого логіна додаємо токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials, {
      validateStatus: status => status < 500,
    });
    token.set(data.token);
    return data;
  } catch (error) {
    console.error('Помилка при вході:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * Після вдалого логаута, видаляємо токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираємо токен зі стейту через getState()
 * 2. Якщо токена немає, виходимо не виконуючі жодних операцій
 * 3. Якщо токен є, додаємо його в HTTP-заголовок і виконуємо операцію
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
