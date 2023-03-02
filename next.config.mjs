const nextConfig = {
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },

  images: {
    domains: ["res.cloudinary.com"],
  },

  webpackDevMiddleware: (config) => {
    return config;
  },
};

export default nextConfig;
