/** @type {import('next').NextConfig} */
import { withAxiom } from "next-axiom";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withAxiom(nextConfig);
