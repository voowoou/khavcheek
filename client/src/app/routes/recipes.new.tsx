import { createFileRoute } from '@tanstack/react-router';
import { RecipesNew } from '@/pages/recipes';

export const Route = createFileRoute('/recipes/new')({
  component: () => <RecipesNew />,
});
