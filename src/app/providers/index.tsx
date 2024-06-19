"use client";

// imports
import { Toaster } from "sonner";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// providers
import QueryProvider from "./Query";
import UserProvider from "./User";

// config
import { rainbowClientConfig } from "@/common/config";

// styles
import "@rainbow-me/rainbowkit/styles.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={rainbowClientConfig}>
      <QueryProvider>
        <UserProvider>
          <RainbowKitProvider>
            {children}
            <Toaster richColors closeButton />
          </RainbowKitProvider>
        </UserProvider>
      </QueryProvider>
    </WagmiProvider>
  );
}
