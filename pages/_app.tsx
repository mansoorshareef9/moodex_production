import "@/styles/globals.css";
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from 'connectkit';
import { publicProvider } from 'wagmi/providers/public';
import { polygon } from 'wagmi/chains';
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import styles from './Price/Form.module.css';

const ethers = require('ethers');


// Configure only the Polygon chain
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon], 
  [publicProvider()]
);

// Create the Wagmi client configuration
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",

    // Required
    appName: "MooDeX",

    // Optional
    appDescription: "MooDeX",

    // Configure chains
    chains,
    publicClient,
    webSocketPublicClient,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        console.log('Connected account:', await signer.getAddress());
      } catch (error: any) {
        if (error.code === 4001) {
          // User rejected the request
          console.error('User rejected the request:', error);
          alert('You rejected the request to connect your wallet.');
        } else {
          console.error('Error connecting to Wallet:', error);
        }
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <WagmiConfig config={config}>
        <ConnectKitProvider theme="midnight">
          {/* Add MooDeX text in the top left */}
          <div className={styles.heading}>
            <span>MooDeX</span>
            <span className={styles.subheading}>by $holycow</span>
          </div>
          <div className={styles.connectwalletbutton}>
            <ConnectKitButton />
          </div>
          {mounted && <Component {...pageProps} />}
          {/* Add the Revoke Permission button outside of the popup */}
          <button 
            className={styles.revokebutton}
            onClick={() => window.open('https://revoke.cash/', '_blank', 'noopener noreferrer')}
          >
            Revoke Approvals
          </button>
        </ConnectKitProvider>
      </WagmiConfig>
      <style jsx>{`
      `}</style>
    </div>
  );
}
