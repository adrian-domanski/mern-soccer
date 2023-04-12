import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/User';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ICredentials } from './LoginPage';

const API_URL = import.meta.env.VITE_SERVER_URL;

interface IAccountState {
  user: IUser | null;
  loading: boolean;
  isLoggedIn: boolean;
  errors: Error[] | any;
}

const initialState: IAccountState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  errors: [],
};

export const registerUser = createAsyncThunk(
  'account/register',
  async (user: IUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, user);
      return response.data;
    } catch (err: any) {
      return rejectWithValue({ error: err.data });
    }
  }
);

export const loginUser = createAsyncThunk<IUser, ICredentials>(
  'account/login',
  async (user: ICredentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, user);
      const { token } = response.data;
      localStorage.setItem('jwt_soccer', JSON.stringify(token));
      toast.success('Successfully logged in');
      return token;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ error: err.data });
    }
  }
);

export const logOutUser = createAsyncThunk(
  'account/logout',
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem('jwt_soccer');
      thunkAPI.dispatch(setLoggedIn(false));
      toast.success('Successfully logged out');
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ error: err.data });
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'account/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem('jwt_soccer')!);
      if (!token) {
        thunkAPI.dispatch(setLoggedIn(false));
        return console.log('No token found');
      }

      const response = await axios.get(`${API_URL}/api/auth/me`, {
        headers: {
          Authorization: token,
        },
      });
      if (response.data) {
        thunkAPI.dispatch(setLoggedIn(true));
      } else {
        thunkAPI.dispatch(setLoggedIn(false));
        return console.error('getCurrentUser: No user found');
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ error: err.data });
    }
  }
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
    });
  },
});

export const { setLoggedIn } = accountSlice.actions;
export default accountSlice.reducer;
