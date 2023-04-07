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

export const getGameById = createAsyncThunk<Game, string>(
  'games/getGameById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/games/game/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<Game, Object>(
  'games/createGame',
  async (game, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/games/game',
        game
      );
      thunkAPI.dispatch(getGames());
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
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getGames
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
    // getGameById
    builder.addCase(getGameById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGameById.fulfilled, (state, action) => {
      state.singleGame = action.payload;
      state.loading = false;
    });
    builder.addCase(getGameById.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { setGames } = gameSlice.actions;
