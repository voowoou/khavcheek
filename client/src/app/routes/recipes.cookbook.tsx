import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/cookbook')({
  component: () => <div>страница моих рецептов</div>,
});
