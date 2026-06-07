import { Recipe } from '../models/Recipe';
import { CreateRecipeDto } from '../../../shared/src/dto/recipe.dto';

class RecipeServiceClass {
  async create(recipe: CreateRecipeDto) {
    return await Recipe.create(recipe);
  }
}

export const RecipeService = new RecipeServiceClass();
