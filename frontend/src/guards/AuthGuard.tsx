import { useAppSelector } from '../store/store';
import { Outlet } from 'react-router-dom';
import LoginPage from '../features/account/LoginPage';

const AuthGuard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  return isLoggedIn ? <Outlet /> : <LoginPage />;
};

export default AuthGuard;
