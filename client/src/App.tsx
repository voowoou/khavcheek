import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import type { RouterContext } from './app/routes/__root';
import { routeTree } from './app/routeTree.gen';
import { TestPing } from './TestPing';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
  context: { queryClient } as RouterContext,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <TestPing />
    </QueryClientProvider>
  );
}

export default App;
