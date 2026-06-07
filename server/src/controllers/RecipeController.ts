import type { Request, Response } from 'express';
import { RecipeService } from '../services/RecipeService';

class RecipeControllerClass {
  create = async (req: Request, res: Response) => {
    try {
      const newRecipe = await RecipeService.create(req.body);
      res.status(201).json({
        sucess: true,
        data: newRecipe,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };
}

export const RecipeController = new RecipeControllerClass();
