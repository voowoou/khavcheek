import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TestPing } from './TestPing';

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <TestPing />
    </QueryClientProvider>
  );
}

export default App;
