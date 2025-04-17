import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { WalletPage } from './pages/WalletPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      gcTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="*" element={<Navigate to="/wallet" replace />} />
          </Routes>
        </Router>
    </QueryClientProvider>
  );
}

export default App;
