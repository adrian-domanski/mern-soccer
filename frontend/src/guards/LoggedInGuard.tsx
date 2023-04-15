import { useAppSelector } from '../store/store';
import { Outlet, useNavigate } from 'react-router-dom';
import GamePage from '../containers/GamePage/GamePage';
import { useEffect } from 'react';

const LoggedInGuard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn]);

  return isLoggedIn ? <GamePage /> : <Outlet />;
};

export default LoggedInGuard;
