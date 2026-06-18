import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/user')({
  component: () => <div>страница настройки пользователя</div>,
});
