/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: "C:\\Users\\Dhruv\\startup\\my-react-app",
  async redirects() {
    return [
      {
        source: "/en/library/dashboard",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
