// @ts-check

import withPWAInit from "@ducanh2912/next-pwa";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  nextConfig,
});
