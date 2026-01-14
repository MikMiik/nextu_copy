/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cellphones.com.vn",
        port: "",
        pathname: "/sforum/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w40/**",
      },
      {
        protocol: "https",
        hostname: "xdcs.cdnchinhphu.vn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "duonggiahotel.vn",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "nextumedialib.blob.core.windows.net",
        port: "",
        pathname: "/media-files/**",
      },
      {
        protocol: "https",
        hostname: "nextuimgstore.blob.core.windows.net",
        port: "",
        pathname: "/media-files/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
