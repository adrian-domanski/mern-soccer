import { useAppSelector } from '../store/store';
import { Outlet, useNavigate } from 'react-router-dom';
import GamesPage from '../containers/GamesPage/GamesPage';
import { useEffect } from 'react';

const LoggedInGuard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn]);

  return isLoggedIn ? <GamesPage /> : <Outlet />;
};

export default LoggedInGuard;
