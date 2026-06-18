import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/$recipeId')({
  component: () => <div>страница рецепта</div>,
});
