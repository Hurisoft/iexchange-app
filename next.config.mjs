/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    WEB3_PROJECT_ID: process.env.WEB3_PROJECT_ID,
  },
};

export default nextConfig;
