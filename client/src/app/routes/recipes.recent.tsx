import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/recent')({
  component: () => <div>страница недавних рецептов</div>,
});
