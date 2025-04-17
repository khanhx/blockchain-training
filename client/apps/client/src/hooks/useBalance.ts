import { useQuery } from "@tanstack/react-query";
import { TokenBalance, useWalletState } from "../contexts/state";

export const useNativeBalance = () => {
  const { address, provider, isUnlocked } = useWalletState()

  const nativeBalance = useQuery({
    queryKey: ['balance', address, isUnlocked, provider],
    queryFn: async () => {
      if (!provider) {
        throw new Error('Provider not found');
      }
      return {
      } as TokenBalance
    },
    enabled: !!address && !!provider,
    gcTime: 30_000,
  })

  return nativeBalance
}

export const useTokenBalances = () => {
  const { address, provider, importedToken } = useWalletState()

  const tokenBalances = useQuery({
    queryKey: ['tokenBalances', address, provider],
    queryFn: async () => {
      return []
    },
    enabled: !!address && !!provider && !!importedToken,
    gcTime: 30_000
  })

  return tokenBalances
}

export const useBalances = () => {
  const nativeBalance = useNativeBalance()
  const tokenBalances = useTokenBalances()

  return {
    nativeBalance: nativeBalance.data,
    data: [nativeBalance.data, ...(tokenBalances.data || [])] as TokenBalance[],
    isLoading: nativeBalance.isLoading || tokenBalances.isLoading,
    isError: nativeBalance.isError || tokenBalances.isError,
    error: nativeBalance.error || tokenBalances.error
  }
}

