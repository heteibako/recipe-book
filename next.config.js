module.exports = {
  images: {
    domains: ["cdn.tuk.dev"],
  },
  env: {},
  dateFormat: {
    locales: ["hu", "en"],
    defaultLocale: "hu",
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
  basePath: "",

  swcMinify: false,
  generateEtags: false,
};
