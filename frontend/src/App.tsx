import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';
import { useAppDispatch } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import NavBar from './components/Layout/Navbar/NavBar';
import SingleGamePage from './features/games/SingleGamePage';
import CreateGamePage from './features/games/CreateGamePage';
import EditGamePage from './features/games/EditGamePage';
import RegisterPage from './features/account/RegisterPage';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './features/account/accountSlice';
import AuthGuard from './guards/AuthGuard';
import LoggedInGuard from './guards/LoggedInGuard';
import LoginPage from './features/account/LoginPage';

import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Layout/Footer/Footer';

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
        <Route path="/" element={<GamesPage />} />
        <Route path="/game/:id" element={<SingleGamePage />} />
        <Route element={<AuthGuard />}>
          <Route path="/create-game" element={<CreateGamePage />} />
          <Route path="/edit-game/:id" element={<EditGamePage />} />
        </Route>

        <Route element={<LoggedInGuard />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
