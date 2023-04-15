import { Route, Routes } from 'react-router-dom';
import GamePage from '../../../containers/GamePage/GamePage';
import SingleGamePage from '../../../features/games/SingleGamePage';
import AuthGuard from '../../../guards/AuthGuard';
import CreateGamePage from '../../../features/games/CreateGamePage';
import EditGamePage from '../../../features/games/EditGamePage';
import LoggedInGuard from '../../../guards/LoggedInGuard';
import RegisterPage from '../../../features/account/RegisterPage';
import LoginPage from '../../../features/account/LoginPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
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
  );
};

export default Router;
