import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGame } from '../../interfaces/Game';
import axios from 'axios';
import { toast } from 'react-toastify';

interface GameState {
  games: IGame[] | null;
  loading: boolean;
  singleGame: IGame | null;
  errors: any;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  errors: null,
};

const API_URL = import.meta.env.VITE_SERVER_URL;

// actions
export const getGames = createAsyncThunk<IGame[]>(
  'games/getGames',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/api/games`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getGameById = createAsyncThunk<IGame, string>(
  'games/getGameById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/api/games/game/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<IGame, Object>(
  'games/createGame',
  async (game, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/games/game`, game);
      thunkAPI.dispatch(getGames());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateGame = createAsyncThunk<IGame, any>(
  'games/updateGame',
  async (game, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/games/game/${game._id}`,
        game
      );
      thunkAPI.dispatch(getGames());
      toast.success('Game updated');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteGame = createAsyncThunk<IGame, string>(
  'games/deleteGame',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/api/games/game/${id}`);
      thunkAPI.dispatch(getGames());
      toast.success('Game deleted');
      return response.data;
    } catch (error) {
      toast.error('There was an error when deleting the game!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers
export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<IGame[]>) => {
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
    // updateGame
    builder.addCase(updateGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateGame.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateGame.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    // createGame
    builder.addCase(createGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createGame.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createGame.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    // deleteGame
    builder.addCase(deleteGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteGame.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteGame.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { setGames } = gameSlice.actions;
