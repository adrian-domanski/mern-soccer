import { Router } from 'express';
import {
  createGame,
  getAllGames,
  getGameById,
} from '../controllers/gameController';
const router: Router = Router();

router.get('/', getAllGames);
router.post('/game', createGame);
router.get('/game/:id', getGameById);

export default router;
