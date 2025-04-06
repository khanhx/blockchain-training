import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { EventLogs } from '../components/EventLogs'
import { LockInfo } from '../components/LockInfo'
import { WalletConnect } from '../components/WalletConnect'
import { RPC_URL } from '../util/rpc'
const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(RPC_URL),
  },
})

const queryClient = new QueryClient()

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Token Lock DApp</h1>
          <p className="mt-2 text-sm text-gray-600">
            Lock your tokens for a specified period of time
          </p>
        </div>

        <div className="mt-8">
          <div className="flex justify-end">
            <WalletConnect />
          </div>

          <div className="mt-8">
            <LockInfo />
            <EventLogs />
          </div>
        </div>
      </div>
    </div>
  )
}

export function App() {
  return (
    // @ts-expect-error - WagmiProvider type issue
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App;
