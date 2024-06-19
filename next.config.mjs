/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    WEB3_PROJECT_ID: process.env.WEB3_PROJECT_ID,
    DEX_CONTRACT_ADDRESS: process.env.DEX_CONTRACT_ADDRESS,
    P2P_CONTRACT_ADDRESS: process.env.P2P_CONTRACT_ADDRESS,
  },
};

export default nextConfig;
