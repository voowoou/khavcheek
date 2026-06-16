import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';

export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Link to="/">Главная</Link>
      </nav>
      <Outlet />
    </>
  ),
});
