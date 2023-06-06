/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");
const withPlugins = require("next-compose-plugins");

const nextConfig = {};

module.exports = withPlugins([withPlausibleProxy()], nextConfig);
