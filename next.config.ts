import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three','@react-three/fiber', '@react-three/drei'],
  reactStrictMode: true,
};

export default nextConfig;
