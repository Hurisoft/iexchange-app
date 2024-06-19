"use client";

// imports
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// providers
import QueryProvider from "./Query";
import UserProvider from "./User";

// config
import { rainbowClientConfig } from "@/config";

// styles
import "@rainbow-me/rainbowkit/styles.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={rainbowClientConfig}>
      <QueryProvider>
        <UserProvider>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </UserProvider>
      </QueryProvider>
    </WagmiProvider>
  );
}
