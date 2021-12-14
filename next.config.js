module.exports = {
  images: {
    domains: ["cdn.tuk.dev"],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  dateFormat: {
    locales: ["hu", "en"],
    defaultLocale: "hu",
  },
  webpack: (config) => {
    config.experiments = {topLevelAwait: true, layers: true};
    return config;
  },
  basePath: "",

  swcMinify: false,
  generateEtags: false,
};
