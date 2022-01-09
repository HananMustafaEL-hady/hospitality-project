/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: [
      "r1imghtlak.mmtcdn.com",
      "www.gannett-cdn.com",
      "hotels.elgouna.com",
      "hotels.elgouna.com",
      "q-xx.bstatic.com",
      "www.mydomaine.com",
    ],
  },
};
