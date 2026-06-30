import { z } from 'zod';

export const createRecipeSchema = z.object({
  title: z.string().default('Новый рецепт'),
  author: z.string(),
  tags: z.array(z.string()).optional(),
  ingredients: z.array(
    z.object({
      ingredient: z.string().min(1, 'Укажите ингредиент'),
      amount: z.number().positive('Количество должно быть больше 0'),
      unit: z.enum(['g', 'ml', 'pcs', 'tsp', 'tbsp', 'toTaste']),
    })
  ),
  directions: z.array(z.string().min(1, 'Шаг не может быть пустым')),
});

export type CreateRecipeDto = z.infer<typeof createRecipeSchema>;
