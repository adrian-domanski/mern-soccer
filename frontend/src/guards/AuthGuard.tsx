import { useAppSelector } from '../store/store';
import { Outlet } from 'react-router-dom';
import RegisterPage from '../features/account/RegisterPage';

const AuthGuard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  return isLoggedIn ? <Outlet /> : <RegisterPage />;
};

export default AuthGuard;
