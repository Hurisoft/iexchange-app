// imports
import { baseSepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// config
const config = getDefaultConfig({
  appName: process.env.PROJECT_NAME!,
  projectId: process.env.WEB3_PROJECT_ID!,
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;
