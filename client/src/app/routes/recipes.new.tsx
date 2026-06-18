import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/new')({
  component: () => <div>страница создания рецепта</div>,
});
