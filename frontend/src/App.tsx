import { useAppDispatch, useAppSelector } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './features/account/accountSlice';
import Layout from './components/Layout/Layout';
import Router from './components/Layout/Router/Router';
import { Datepicker, Input, Timepicker, initTE } from 'tw-elements';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const { games } = useAppSelector((state) => state.games);
  const navigate = useNavigate();

  const initApp = useCallback(async () => {
    if (!user) await dispatch(getCurrentUser());
    if (!games?.length) await dispatch(getGames());
    await initTE({ Datepicker, Input, Timepicker });
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp, navigate]);

  return (
    <Layout>
      <ToastContainer />
      <Router />
    </Layout>
  );
}

export default App;
