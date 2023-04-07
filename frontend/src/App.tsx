import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { useAppDispatch } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import NavBar from './components/Layout/NavBar';
import SingleGamePage from './features/games/SingleGamePage';
import CreateGamePage from './features/games/CreateGamePage';

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<GamesPage />} />
        <Route path='/game/:id' element={<SingleGamePage />} />
        <Route path='/create-game' element={<CreateGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
