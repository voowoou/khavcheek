import { createFileRoute } from '@tanstack/react-router';
// По FSD импортируем реальный UI из слоя pages:
// import { HomePage } from '@/pages/home'

export const Route = createFileRoute('/')({
  component: () => <div>Это главная страница (UI берем из layers/pages)</div>,
});
