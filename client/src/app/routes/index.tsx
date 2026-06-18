import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div>Это главная страница (UI берем из layers/pages)</div>,
});
