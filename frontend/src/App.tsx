import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { useAppDispatch } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import NavBar from './components/NavBar';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
