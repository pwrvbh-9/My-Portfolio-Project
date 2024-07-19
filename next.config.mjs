/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      SERVICE_KEY: process.env.SERVICE_KEY,
      TEMPLATE_KEY: process.env.TEMPLATE_KEY,
      PUBLIC_KEY: process.env.PUBLIC_KEY,
    },
  };
  
  export default nextConfig;