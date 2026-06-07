export interface CreateRecipeDto {
  title: string;
  author: string;
  tags?: string[];
  ingredients: Array<{
    ingredient: string;
    amount: number;
    unit: 'g' | 'ml' | 'pcs' | 'tsp' | 'tbsp' | 'toTaste';
  }>;
  directions: string[];
}
