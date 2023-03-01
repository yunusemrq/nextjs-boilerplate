/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextTranslate(
  {
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
  },
  nextConfig
);
