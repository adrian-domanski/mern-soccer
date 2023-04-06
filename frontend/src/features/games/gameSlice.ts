import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Game } from '../../interfaces/Game';
import { RootState } from '../../store/store';
import axios from 'axios';

interface GameState {
  games: Game[] | null;
  loading: boolean;
  singleGame: Game | null;
  errors: any;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  errors: null,
};

// actions
export const getGames = createAsyncThunk<Game[]>(
  'games/getGames',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/games');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<Object, Game>(
  'games/createGame',
  async (game, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/games',
        game
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers
export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state: RootState, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});
