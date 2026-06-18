import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes')({
  component: () => (
    <>
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Link to="/">на главную типа</Link>
      </nav>
      <Outlet />
    </>
  ),
});
