/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],

  images: {
    domains: [
      "r1imghtlak.mmtcdn.com",
      "www.gannett-cdn.com",
      "hotels.elgouna.com",
      "hotels.elgouna.com",
      "q-xx.bstatic.com",
      "www.mydomaine.com",
      "res.cloudinary.com",
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
