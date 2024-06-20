/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    WEB3_PROJECT_ID: process.env.WEB3_PROJECT_ID,
    DEX_ROUTER_CONTRACT_ADDRESS: process.env.DEX_ROUTER_CONTRACT_ADDRESS,
    DEX_FACTORY_CONTRACT_ADDRESS: process.env.DEX_FACTORY_CONTRACT_ADDRESS,
    P2P_CONTRACT_ADDRESS: process.env.P2P_CONTRACT_ADDRESS,
    GRAPHQL_BASE_URL: process.env.GRAPHQL_BASE_URL,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  },
};

export default nextConfig;
