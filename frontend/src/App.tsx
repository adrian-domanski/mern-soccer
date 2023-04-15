import { useAppDispatch } from './store/store';
import { useCallback, useEffect } from 'react';
import { getGames } from './features/games/gameSlice';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from './features/account/accountSlice';
import Layout from './components/Layout/Layout';
import Router from './components/Layout/Router/Router';

import 'react-toastify/dist/ReactToastify.css';

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
    <Layout>
      <ToastContainer />
      <Router />
    </Layout>
  );
}

export default App;
