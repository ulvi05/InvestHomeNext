/** @type {import('next').NextConfig} */
const isTurbopack = process.env.TURBOPACK === '1';
const isDev = process.env.NODE_ENV === 'development';

const baseConfig = {
  reactStrictMode: true
};

if (!isTurbopack) {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: isDev,
  });

  module.exports = withPWA(baseConfig);
} else {
  module.exports = baseConfig;
}
