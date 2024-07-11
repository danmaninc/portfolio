/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/comics/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
      {
        protocol: "https",
        hostname: "sun1-19.userapi.com",
        port: "",
        pathname: "/s/**",
      },
      {
        protocol: "https",
        hostname: "innohassle.ru",
        port: "",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
