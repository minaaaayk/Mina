const { i18n } = require("./next-i18next.config");

/** @type {*} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = nextConfig
