"use client";
import { WagmiConfig, createConfig, Chain } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";

const chains = [mainnet, polygon, optimism, arbitrum, sepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required
    appName: "Arttribute Finance",
    chains: chains,
    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

export const ConnectkitCustomProvider = ({ children }: any) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};
