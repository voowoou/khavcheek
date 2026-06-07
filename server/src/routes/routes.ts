import { Router } from 'express';
import { RecipeController } from '../controllers/RecipeController';

const router = Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'HELLO WORRRRLD!' });
});

router.post('/recipes', RecipeController.create);

export default router;
