import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { useAppDispatch } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import NavBar from './components/Layout/NavBar';
import SingleGamePage from './features/games/SingleGamePage';
import CreateGamePage from './features/games/CreateGamePage';
import EditGamePage from './features/games/EditGamePage';
import LoginPage from './features/account/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from './features/account/accountSlice';

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getCurrentUser());
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<GamesPage />} />
        <Route path='/game/:id' element={<SingleGamePage />} />
        <Route path='/create-game' element={<CreateGamePage />} />
        <Route path='/edit-game/:id' element={<EditGamePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
