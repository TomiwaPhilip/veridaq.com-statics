import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  // Your Next.js config
  experimental: {
    serverActions: {
      allowedOrigins: [
        "upgraded-space-potato-rq6vgj5q6vphw76q-3000.app.github.dev",
        "localhost:3000",
      ],
      missingSuspenseWithCSRBailout: true,
    },
  },
});
