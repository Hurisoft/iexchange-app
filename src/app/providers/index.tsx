"use client";

// imports
import { Toaster } from "sonner";
import { WagmiProvider } from "wagmi";
import { ApolloProvider } from "@apollo/client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// providers
import QueryProvider from "./Query";
import UserProvider from "./User";

// config
import { rainbowClientConfig, apolloClient } from "@/common/config";

// styles
import "@rainbow-me/rainbowkit/styles.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={rainbowClientConfig}>
      <ApolloProvider client={apolloClient}>
        <QueryProvider>
          <UserProvider>
            <RainbowKitProvider>
              {children}
              <Toaster richColors closeButton position="top-right" />
            </RainbowKitProvider>
          </UserProvider>
        </QueryProvider>
      </ApolloProvider>
    </WagmiProvider>
  );
}
