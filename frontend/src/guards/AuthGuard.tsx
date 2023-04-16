import LoginPage from '../containers/LoginPage/LoginPage';
import { useAppSelector } from '../store/store';
import { Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  return isLoggedIn ? <Outlet /> : <LoginPage />;
};

export default AuthGuard;
