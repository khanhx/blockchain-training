import { useWalletState } from "../contexts/state";

export const useWallet = () => {
  const { address, network, importedToken, provider, signer, encryptedInfo, isUnlocked, set } = useWalletState()

  const importWallet = async (privateKey: string, passcode: string) => {
  }

  const unlockWallet = async (passcode: string) => {
  }

  const switchNetwork = async (chainId: number) => {
  }

  return {
    address,
    network,
    importedToken,
    provider,
    signer,
    encryptedInfo,
    isUnlocked,
    importWallet,
    unlockWallet,
    switchNetwork
  }
}
