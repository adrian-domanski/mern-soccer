import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesPage from './features/games/GamesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
